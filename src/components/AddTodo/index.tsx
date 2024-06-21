// import React from "react";
// import { Controller, useForm } from "react-hook-form";

// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Form } from "../ui/form";
// import { PlusIcon } from "lucide-react";
// import { Button } from "../ui/button";

// export const AddTodo = () => {
//   const form = useForm({});

//   return (
//     <div className="flex gap-4 items-center">
//       <div className="w-full flex gap-2">
//         <Card className="w-full flex flex-col gap-4 p-4 items-center sm:flex-row focus-within:ring focus-visible:ring-offset-1 focus-within:ring-black">
//           <div className="w-full flex flex-col gap-2 relative">
//             <Form {...form}>
//               <form id="form-todo">
//                 <Button
//                   id="form-todo"
//                   onClick={handleOnSubmit}
//                   className="border w-full sm:w-auto flex gap-2"
//                 >
//                   <PlusIcon /> Add
//                 </Button>
//               </form>
//             </Form>
//             <Input
//               control={control}
//               name="addTodo"
//               className="w-full p-0 border-transparent focus:outline-none focus:rounded-none focus:border-none focus-visible:ring-0"
//               // onChange={(e) => setDescription(e.target.value)}
//               // value={description}
//               placeholder="Adicionar tarefa"
//             />
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };
