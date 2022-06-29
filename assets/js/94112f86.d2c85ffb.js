"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[731],{7598:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(3117),s=(a(7294),a(3905)),r=a(7689);const o={title:"Arrays",sidebar_position:7},i=void 0,c={unversionedId:"arrays",id:"arrays",title:"Arrays",description:"As part of formulating a programme of a mathematical theory of computation McCarthy proposed a basic theory of arrays as characterized by the select-store axioms. The expression (select a i) returns the value stored at position i of the array a; and (store a i v) returns a new array identical to a, but on position i it contains the value v.",source:"@site/docs/07 - arrays.md",sourceDirName:".",slug:"/arrays",permalink:"/rise4fun/docs/arrays",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/07 - arrays.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Arrays",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Bitvectors",permalink:"/rise4fun/docs/Bitvectors"},next:{title:"Datatypes",permalink:"/rise4fun/docs/Datatypes"}},l={},d=[{value:"Select and Store",id:"select-and-store",level:3},{value:"Constant Arrays",id:"constant-arrays",level:3},{value:"Array models",id:"array-models",level:3},{value:"Mapping Functions on Arrays",id:"mapping-functions-on-arrays",level:3},{value:"Bags as Arrays",id:"bags-as-arrays",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As part of formulating a programme of a mathematical theory of computation McCarthy proposed a ",(0,s.kt)("em",{parentName:"p"},"basic")," theory of arrays as characterized by the select-store axioms. The expression (select a i) returns the value stored at position i of the array a; and (store a i v) returns a new array identical to a, but on position i it contains the value v."),(0,s.kt)("p",null,"Z3 contains a decision procedure for the basic theory of arrays. By default, Z3 assumes that arrays are extensional over select. In other words, Z3 also enforces that if two arrays agree on all reads, then the arrays are equal."),(0,s.kt)("p",null,"It also contains various extensions for operations on arrays that remain decidable and amenable to efficient saturation procedures (here efficient means, with an NP-complete satisfiability complexity). We describe these extensions in the following using a collection of examples. Additional background on these extensions is available in the paper ",(0,s.kt)("a",{parentName:"p",href:"httpresearch.microsoft.comen-usumpeopleleonardofmcad09.pdf"},"Generalized and Efficient Array Decision Procedures"),"."),(0,s.kt)("h3",{id:"select-and-store"},"Select and Store"),(0,s.kt)("p",null,"Let us first check a basic property of arrays. Suppose a1 is an array of integers, then the constraint (and (= (select a1 x) x) (= (store a1 x y) a1)) is satisfiable for an array that contains an index x that maps to x, and when x = y (because the first equality forced the range of x to be x). We can check this constraint."),(0,s.kt)(r.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(declare-const z Int)\n(declare-const a1 (Array Int Int))\n(declare-const a2 (Array Int Int))\n(declare-const a3 (Array Int Int))\n(assert (= (select a1 x) x))\n(assert (= (store a1 x y) a1))\n(check-sat)\n(get-model)"},mdxType:"Z3CodeBlock"}),(0,s.kt)("p",null,"On the other hand, the constraints become unsatisfiable when asserting (not (= x y))."),(0,s.kt)(r.Z,{input:{code:"(declare-const x Int)\n(declare-const y Int)\n(declare-const z Int)\n(declare-const a1 (Array Int Int))\n(declare-const a2 (Array Int Int))\n(declare-const a3 (Array Int Int))\n(assert (= (select a1 x) x))\n(assert (= (store a1 x y) a1))\n(assert (not (= x y)))\n(check-sat)"},mdxType:"Z3CodeBlock"}),(0,s.kt)("h3",{id:"constant-arrays"},"Constant Arrays"),(0,s.kt)("p",null,"The array that maps all indices to some fixed value can be specified in Z3 using the const construct. It takes one value from the range type of the array and creates an array. Z3 cannot infer what kind of array must be returned by the const construct by just inspecting the argument type. Thus, a qualified identifier (as const (Array T1 T2)) must be used. The following example defines a constant array containing only ones."),(0,s.kt)(r.Z,{input:{code:"(declare-const all1 (Array Int Int))\n(declare-const a Int)\n(declare-const i Int)\n(assert (= all1 ((as const (Array Int Int)) 1)))\n(assert (= a (select all1 i)))\n(check-sat)\n(get-model)\n(assert (not (= a 1)))\n(check-sat)"},mdxType:"Z3CodeBlock"}),(0,s.kt)("h3",{id:"array-models"},"Array models"),(0,s.kt)("p",null,"Models provide interpretations of the uninterpreted (aka free) constants and functions that appear in the satisfiable formula. An interpretation for arrays is very similar to the interpretation of a function. Z3 uses the construct (",(0,s.kt)("em",{parentName:"p"}," as-array f) to give the interpretation for arrays. If the array a is equal to (")," as-array f), then for every index i, (select a i) is equal to (f i). In the previous example, Z3 creates the auxiliary function k!0 to assign an interpretation to the array constant all1."),(0,s.kt)("h3",{id:"mapping-functions-on-arrays"},"Mapping Functions on Arrays"),(0,s.kt)("p",null,"In the following, we will simulate basic Boolean algebra (set theory) using the array theory extensions in Z3. Z3 provides a parametrized map function on arrays. It allows applying arbitrary functions to the range of arrays. The following example illustrates how to use the map function."),(0,s.kt)(r.Z,{input:{code:"(define-sort Set (T) (Array T Bool))\n(declare-const a (Set Int))\n(declare-const b (Set Int))\n(declare-const c (Set Int))\n(declare-const x Int)\n(push)\n(assert (not (= ((_ map and) a b) ((_ map not) ((_ map or) ((_ map not) b) ((_ map not) a))))))\n(check-sat)\n(pop)\n(push) \n(assert (and (select ((_ map and) a b) x) (not (select a x))))\n(check-sat)\n(pop)\n(push) \n(assert (and (select ((_ map or) a b) x) (not (select a x))))\n(check-sat)\n(get-model)\n(assert (and (not (select b x))))\n(check-sat)"},mdxType:"Z3CodeBlock"}),(0,s.kt)("h3",{id:"bags-as-arrays"},"Bags as Arrays"),(0,s.kt)("p",null,"We can use the parametrized map function to encode finite sets and finite bags. Finite bags can be modeled similarly to sets. A bag is here an array that maps elements to their multiplicity. Main bag operations include union, obtained by adding multiplicity, intersection, by taking the minimum multiplicity, and a dual join operation that takes the maximum multiplicity. In the following example, we define the bag-union using map. Notice that we need to specify the full signature of + since it is an overloaded operator."),(0,s.kt)(r.Z,{input:{code:"(define-sort A () (Array Int Int Int))\n(define-fun bag-union ((x A) (y A)) A\n  ((_ map (+ (Int Int) Int)) x y))\n(declare-const s1 A)\n(declare-const s2 A)\n(declare-const s3 A)\n(assert (= s3 (bag-union s1 s2)))\n(assert (= (select s1 0 0) 5))\n(assert (= (select s2 0 0) 3))\n(assert (= (select s2 1 2) 4))\n(check-sat)\n(get-model)"},mdxType:"Z3CodeBlock"}))}u.isMDXComponent=!0}}]);