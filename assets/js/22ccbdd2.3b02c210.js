"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[386],{9875:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var s=e(3117),a=(e(7294),e(3905)),i=e(7689);const o={title:"Uninterpreted Functions and Constants",sidebar_position:4},r=void 0,c={unversionedId:"Uninterpreted-functions-and-constants",id:"Uninterpreted-functions-and-constants",title:"Uninterpreted Functions and Constants",description:"The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function.",source:"@site/docs/04 - Uninterpreted-functions-and-constants.md",sourceDirName:".",slug:"/Uninterpreted-functions-and-constants",permalink:"/rise4fun/docs/Uninterpreted-functions-and-constants",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/04 - Uninterpreted-functions-and-constants.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Uninterpreted Functions and Constants",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Propositional Logic",permalink:"/rise4fun/docs/propositional-logic"},next:{title:"Arithmetic",permalink:"/rise4fun/docs/category/arithmetic"}},d={},u=[],l={toc:u};function f(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,s.Z)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function."),(0,a.kt)(i.Z,{input:{code:"(declare-fun f (Int) Int)\n(declare-fun a () Int) ; a is a constant\n(declare-const b Int) ; syntax sugar for (declare-fun b () Int)\n(assert ( a 20))\n(assert ( b a))\n(assert (= (f 10) 1))\n(check-sat)\n(get-model)"},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"Unlike programming languages, where functions have side-effects, can throw exceptions, or never return, functions in classical first-order logic have no side-effects and are total. That is, they are defined on all input values. This includes functions, such as division."),(0,a.kt)("p",null,"Function and constant symbols in pure first-order logic are ",(0,a.kt)("em",{parentName:"p"},"uninterpreted")," or ",(0,a.kt)("em",{parentName:"p"},"free"),", which means that no a priori interpretation is attached. This is in contrast to functions belonging to the signature of theories, such as arithmetic where the function + has a fixed standard interpretation (it adds two numbers). Uninterpreted functions and constants are maximally flexible; they allow any interpretation that is consistent with the constraints over the function or constant."),(0,a.kt)("p",null,"To illustrate uninterpreted functions and constants let us introduce an (uninterpreted) sort A, and the constants x, y ranging over A. Finally let f be an uninterpreted function that takes one argument of sort A and results in a value of sort A. The example illustrates how one can force an interpretation where f applied twice to x results in x again, but f applied once to x is different form x."),(0,a.kt)(i.Z,{input:{code:"(declare-sort A)\n(declare-const x A)\n(declare-const y A)\n(declare-fun f (A) A)\n(assert (= (f (f x)) x))\n(assert (= (f x) y))\n(assert (not (= x y)))\n(check-sat)\n(get-model)"},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"The resulting model introduces abstract values for the elements in A, because the sort A is uninterpreted. The interpretation for f in the model toggles between the two values for x and y, which are different."))}f.isMDXComponent=!0}}]);