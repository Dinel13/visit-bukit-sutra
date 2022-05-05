import React from "react";

export default function PendingInline() {
  return (
   <button
   type="button"
   disabled
   className="inline-flex justify-center items-center px-16 py-1.5 rounded bg-teal-600 text-white"
 >
   <svg
     xmlns="http://www.w3.org/2000/svg"
     className="animate-spin h-5 w-5"
     fill="none"
     viewBox="0 0 24 24"
     stroke="currentColor"
   >
     <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth={3}
       d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
     />
   </svg>
 </button>
  );
}
