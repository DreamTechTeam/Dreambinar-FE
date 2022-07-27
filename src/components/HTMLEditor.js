import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useFormContext, useController } from "react-hook-form";

const HTMLTextEditor = ({ name }) => {
  const { control } = useFormContext();
  const {
    field: { onChange, ...field },
  } = useController({ control, name });

  return (
    <>
      <Editor
        apiKey="d0f6n370g3zgqhw70k3x57vfl92plvqpqybcqjx5p3xavo7k"
        init={{
          menubar: "file edit", // available: file edit view format
          mobile: {
            menubar: "file edit",
          },
          toolbar:
            "undo redo | formatselect bullist numlist | bold italic underline strikethrough language | removeformat",
          branding: false,
        }}
        id="description"
        onEditorChange={onChange}
        {...field}
        {...control.register(name, { required: true })}
      />
    </>
  );
};

export default HTMLTextEditor;
