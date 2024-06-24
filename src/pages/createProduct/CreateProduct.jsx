import React, { useState } from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import "../../sass/__createProduct.scss";
import { useCreateProductMutation } from "../../context/api/productApi";
import LocalImages from "./LocalImages";
const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
  files: "",
};

const CreateProduct = () => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const [createProduct, { isLoading }] = useCreateProductMutation();

  const [files, setFiles] = useState("");
  console.log();

  const handleCreateProduct = (e) => {
    e.preventDefault();
    setFormData(initialState);
    createProduct(formData);
    let form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("description", formData.description);
    form.append("info", JSON.stringify({}));

    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });
    createProduct(form);
  };

  return (
    <form onSubmit={handleCreateProduct}>
      <div className="form__sec">
        <h1>CreateProduct</h1>
        <input
          placeholder="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          name="title"
        />
        <input
          placeholder="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          name="price"
        />
        <input
          placeholder="oldPrice"
          type="number"
          value={formData.oldPrice}
          onChange={handleChange}
          name="oldPrice"
        />
        <input
          placeholder="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          name="category"
        />
        <input
          placeholder="units"
          type="text"
          value={formData.units}
          onChange={handleChange}
          name="units"
        />
        <textarea
          placeholder="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          name="description"
        />
        <textarea
          placeholder="info"
          type="text"
          value={formData.info}
          onChange={handleChange}
          name="info"
        />
        <article>
          <input
            onChange={(e) => setFiles(e.target.files)}
            type="file"
            multiple
            accept="image/*"
          />
          <article>
            <LocalImages files={files} setFiles={setFiles} />
          </article>
        </article>
        <button disabled={isLoading}>Create</button>
      </div>
    </form>
  );
};

export default CreateProduct;
