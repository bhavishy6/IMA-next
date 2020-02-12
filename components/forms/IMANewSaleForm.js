import { Formik, Form, useField, FieldArray } from "formik";
import Autocomplete from "react-autocomplete";
import * as Yup from "yup";
import styled from "@emotion/styled";

var moment = require('moment')
moment().format('L');


const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

const MyDateInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

function submitNewSale(values) {
  //calculate totalPrice of sale
  //add entry to Sales collection in Mongo.
  //check if customer already exists by Name. if not add new with email if exists.
  //find products in Products and decrease qty by amount
  //go through the products. if any products do not exist, create new product with qty 0.
  values['quantities'].forEach((product, index) => {
    // if (productListContainsProduct(product['name'])) {
    updateProductInInventory(product['name'], product['qty'])
    // }
    //insert thisProductInDB into db 
  })
}

const updateProductInInventory = async (name, incrementAmt) => {
  const res = await fetch('http://localhost:3000/api/inventoryUpdate', {
    method: 'post',
    body: JSON.stringify({ name: name, incrementAmt: incrementAmt })
  })
}

// Styled components ....
const StyledSelect = styled.select`
    color: var(--blue);
  `;

const StyledErrorMessage = styled.div`
    font-size: 12px;
    color: var(--red-600);
    width: 400px;
    margin-top: 0.25rem;
    &:before {
      content: "❌ ";
      font-size: 10px;
    }
    @media (prefers-color-scheme: dark) {
      color: var(--red-300);
    }
  `;

const StyledLabel = styled.label`
    margin-top: 1rem;
  `;


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
        onSubmit={(values, { setSubmitting }) => {
          console.log("submitted" + JSON.stringify(values));
          setTimeout(() => {
            submitNewSale(values);
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, touched, handleReset, setFieldValue }) => {
          return (
            <Form>
              <MyTextInput
                label="Customer Name"
                name="customerName"
                type="text"
                placeholder="John Doe"
              />
              <MyDateInput
                label="Date of Sale"
                name="date"
                type="date"
                placeholder={moment()}
              />
              <MyTextInput
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
                            <MySelect label="Product Name" name={`quantities.${index}.name`}>
                              <option value="">Select a product</option>
                              {props.productList.map(product => <option value={product.name}>{product.name + " ($"+ product.price +")"}</option>)}

                            </MySelect>
                          </div>
                          <div className="col">
                            <label htmlFor={`quantities.${index}.qty`}> Quantity</label>
                            <MyTextInput
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