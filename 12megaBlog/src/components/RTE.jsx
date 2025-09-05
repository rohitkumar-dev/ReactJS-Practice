import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from '../conf/conf.js'

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={conf.tinyMceApi}
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              promotion: false,
              
              plugins: [
             
                "advlist",
                "autolink",
                "lists",
                "link",
                // "image",
                // "charmap",
                // "preview",
                "anchor",
                // "searchreplace",
                // "visualblocks",
                "code",
                // "fullscreen",
                // "insertdatetime",
                // "media",
                "table",
                // "code",
                "help",
                // "wordcount",
                // "anchor",
              ],
              toolbar:
                "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
