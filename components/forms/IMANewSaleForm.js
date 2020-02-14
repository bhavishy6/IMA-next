import { Formik, Form, useField, FieldArray } from "formik";
import * as Yup from "yup";
import * as IMAInputs from "./IMAInputs"

var moment = require('moment')
moment().format('L');



function submitNewSale(productList, values) {
  var totalPrice = 0;
  var existingProductQty = 0;
  var productPrice = 0;
  values.quantities.forEach((product, index)=> {
    var p = getProductFromProductList(productList, product.name);
    productPrice = p.price;
    existingProductQty = p.qty
    product.price = productPrice;
    totalPrice += product.price * product.qty;
  }, values.quantities );
  values.totalPrice = totalPrice;
  values.date = moment(values.date).add(1, 'minutes').toDate()
  insertSaleIntoSales(values); 
  //check if customer already exists by Name. if not add new with email if exists.
  values['quantities'].forEach((product, index) => {
    updateProductInInventory(product['name'], existingProductQty - product['qty'], productPrice)
  })
}

function getProductFromProductList(productList, productName) {
  var ret = null
  productList.forEach((product, index) => {
    if(product.name === productName) {
      ret = product;
    }
  })
  return ret;
}

const updateProductInInventory = async (name, qty, productPrice) => {
  const res = await fetch('http://localhost:3000/api/inventoryUpdate', {
    method: 'post',
    body: JSON.stringify({ name: name, qty: qty, price:productPrice })
  })
}

const insertSaleIntoSales = async (sale) => {
  const rest = await fetch('http://localhost:3000/api/sales', {
    method:'post',
    body: JSON.stringify(sale)
    })
}


const IMANewSaleForm = props => {
  console.log(JSON.stringify(props.productList.map(
    function (val, index) {
      return { name: val.name }
    })));
  return (
    <>
      <h1>Add New Sale</h1>
      <Formik
        initialValues={{
          customerName: "",
          date: "",
          customerEmail: "",
          quantities: [{}] // added for our select
        }}
        validationSchema={Yup.object({
          customerName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          date: Yup.date()
            .required("Required"),
          customerEmail: Yup.string()
            .email("Invalid email address"),
          quantities: Yup.array()
            .of(
              Yup.object().shape({
                name: Yup.string()
                  .required('Required'),
                qty: Yup.number()
                  .min(0, 'Must be atleast 1')
                  .required('Required'),
              })
            ).required('Must have products sold')
            .min(1, 'Minimum of 1 product'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("new sale submitted" + JSON.stringify(values));
          resetForm({});
          setTimeout(() => {
            submitNewSale(props.productList, values);
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, touched, handleReset, setFieldValue }) => {
          return (
            <Form>
              <IMAInputs.MyTextInput
                label="Customer Name"
                name="customerName"
                type="text"
                placeholder="John Doe"
              />
              <IMAInputs.MyDateInput
                label="Date of Sale"
                name="date"
                type="date"
                placeholder={moment()}
              />
              <IMAInputs.MyTextInput
                label="Customer Email Address"
                name="customerEmail"
                type="email"
                placeholder="jane@doe.com"
              />
              <h3>Add Products Bought</h3>
              <FieldArray
                name="quantities"
                render={arrayHelpers => (
                  <div>
                    {values.quantities.length > 0 &&
                      values.quantities.map((product, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            <label htmlFor={`quantities.${index}.name`}>Name</label>
                            <IMAInputs.MySelect label="Product Name" name={`quantities.${index}.name`}>
                              <option defaultValue="" value="">Select a product</option>
                              {props.productList.map(product => <option key={product.name} value={product.name}>{product.name + " ($"+ product.price +")"}</option>)}

                            </IMAInputs.MySelect>
                          </div>
                          <div className="col">
                            <label htmlFor={`quantities.${index}.qty`}> Quantity</label>
                            <IMAInputs.MyTextInput
                              name={`quantities.${index}.qty`}
                              placeholder="99999"
                              type="number"
                            />
                          </div>
                          <div className="col">
                            <button
                              className="secondary"
                              type="remove"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              X
                      </button>
                          </div>
                        </div>
                      ))}
                    <button
                      type="add"
                      className="secondary"
                      onClick={() => arrayHelpers.push({ name: "", qty: "" })}
                    >
                      Add Product
              </button>
                  </div>
                )}
              />

              <button type="submit">Submit</button>
            </Form>
          )
        }}
      </Formik>
    </>
  );
};

export default IMANewSaleForm;