// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Input from "./Input";
// import Button from "./Button";

// function ContactForm() {
//   const { handleSubmit, register, reset, formState: { errors, isSubmitSuccessful } } = useForm();

//   const contact = async (data)=>{
//     setError("")
//     console.log(data);
//     reset()
//   }
//   return (
//     <div className="text-white">
//       <div>
//         <p>Contact us</p>
//       </div>
//       <div>
//         <form onSubmit={handleSubmit(contact)}>
//           <Input
//             label="Full Name: "
//             placeholder="Enter your full name"
//             {...register("name", {
//               required: true,
//             })}
//           />
//           <Input
//             label="Email: "
//             placeholder="Enter your email"
//             {...register("email", {
//               required: true,
//               validate: {
//                 matchPatern: (value) =>
//                   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                   "Email address must be a valid address",
//               },
//             })}
//           />
//           <Input
//             label="Query: "
//             placeholder="Enter your query"
//             {...register("query", {
//               required: true,
//             })}
//           />
//           {errors.name && <p className="text-red-400">{errors.name.message}</p>}
//           <Button type="submit" className="w-full">
//             Submit query
//           </Button>
//           {isSubmitSuccessful && <p>Submitted</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;



import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";

function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const contact = async (data) => {
    console.log(data);

    // simulate API call
    await new Promise((res) => setTimeout(res, 500));

    reset(); // clears fields & errors
  };

  return (
    <div className="text-white">
      <div>
        <p>Contact us</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(contact)}>
          {/* Full Name */}
          <Input
            label="Full Name: "
            placeholder="Enter your full name"
            {...register("name", {
              required: "Full name is required",
            })}
          />
          {errors.name && (
            <p className="text-red-400">{errors.name.message}</p>
          )}

          {/* Email */}
          <Input
            label="Email: "
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email address must be valid",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-400">{errors.email.message}</p>
          )}

          {/* Query */}
          <Input
            label="Query: "
            placeholder="Enter your query"
            {...register("query", {
              required: "Query is required",
            })}
          />
          {errors.query && (
            <p className="text-red-400">{errors.query.message}</p>
          )}

          <Button type="submit" className="w-full">
            Submit query
          </Button>

          {/* Success Message */}
          {isSubmitSuccessful && (
            <p className="mt-3 text-green-400">
              ✅ Your query was submitted successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
