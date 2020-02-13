import { Formik, Form, useField, FieldArray } from "formik";
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

function submitNewProduct(productList, values) {
  //check if customer already exists by Name. if not add new with email if exists.
  if(productExistsInProductList(productList, values['name'])) {
    updateProductInInventory(values['name'], values['qty'], values['price'])
  } else {
    insertProductIntoInventory(values); 
  }
}

function productExistsInProductList(productList, productName) {
  var ret = null
  productList.forEach((product, index) => {
    if(product.name === productName) {
      ret = true;
    }
  })
  return ret;
}

const updateProductInInventory = async (name, qty, price) => {
  const res = await fetch('http://localhost:3000/api/inventoryUpdate', {
    method: 'post',
    body: JSON.stringify({ name: name, qty: qty, price:price })
  })
}

const insertProductIntoInventory = async (product) => {
  const rest = await fetch('http://localhost:3000/api/inventory', {
    method:'post',
    body: JSON.stringify(product)
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


const IMAEditProductForm = props => {
  console.log(JSON.stringify(props.inventory.map(
    function (val, index) {
      return { name: val.name }
    })));
  return (
    <>
      <h1>Add New or Edit Product</h1>
      <Formik
        initialValues={{
          name: "",
          price: "",
          qty: "",
          }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          price: Yup.number()
            .required("Required"),
          qty: Yup.number()
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("new product submitted" + JSON.stringify(values));
          resetForm({});
          setTimeout(() => {
            submitNewProduct(props.productList, values);
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, touched, handleReset, setFieldValue }) => {
          return (
            <Form>
              <MyTextInput
                label="Product Name"
                name="name"
                type="text"
              />
              <MyTextInput
                label="Product Price"
                name="price"
                type="number"
              />
              <MyTextInput
                label="Quantity in Stock"
                name="qty"
                type="number"
              />
              <button type="submit">Submit</button>
            </Form>
          )
        }}
      </Formik>
    </>
  );
};

export default IMAEditProductForm;