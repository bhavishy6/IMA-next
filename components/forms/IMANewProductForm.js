import { Formik, Form, useField, FieldArray } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";

import * as IMAInputs from "./IMAInputs"

var moment = require('moment')
moment().format('L');


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
            window.location.reload(false);
          }, 400);
        }}
      >
        {({ values, errors, touched, handleReset, setFieldValue }) => {
          return (
            <Form>
              <IMAInputs.MyTextInput
                label="Product Name"
                name="name"
                type="text"
              />
              <IMAInputs.MyTextInput
                label="Product Price"
                name="price"
                type="number"
              />
              <IMAInputs.MyTextInput
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