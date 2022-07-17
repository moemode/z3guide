"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2617],{4428:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var t=a(3117),i=(a(7294),a(3905)),n=a(3234),o=a.n(n);const s={title:"Special Relations",sidebar_position:14},l=void 0,d={unversionedId:"theories/Special Relations",id:"theories/Special Relations",title:"Special Relations",description:"Special Binary Relations",source:"@site/docs/02 - theories/14 - Special Relations.md",sourceDirName:"02 - theories",slug:"/theories/Special Relations",permalink:"/z3guide/docs/theories/Special Relations",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/02 - theories/14 - Special Relations.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Special Relations",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Unicode Characters",permalink:"/z3guide/docs/theories/Characters"},next:{title:"Introduction",permalink:"/z3guide/docs/strategies/intro"}},c={},u=[{value:"Special Binary Relations",id:"special-binary-relations",level:2},{value:"Partial Order",id:"partial-order",level:3},{value:"Linear Order",id:"linear-order",level:3},{value:"Tree Order",id:"tree-order",level:3},{value:"Piece-wise Linear Order",id:"piece-wise-linear-order",level:3},{value:"Transitive Closures",id:"transitive-closures",level:2}],p={toc:u};function f(e){let{components:r,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"special-binary-relations"},"Special Binary Relations"),(0,i.kt)("p",null,"Binary relations that are partial orders, linear orders, tree orders, and piece-wise linear orders\ncan be axiomatized using first order quantifiers. However, reasoning with these quantified axioms involves\nnon-linear overhead, up to a quadratic number of quantifier instantiations.\nThe decision procedures for partial, linear, tree and piece-wise linear orders in z3\nuse variants of Ford-Fulkerson push relabeling graphs."),(0,i.kt)("h3",{id:"partial-order"},"Partial Order"),(0,i.kt)(o(),{input:{code:"(declare-sort A 0)\n(declare-fun R (A A) Bool)\n(assert (forall ((x A)) (R x x)))\n(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))",result:{output:"",error:"",status:"z3-ran",hash:"3cafea728bb61156b6ed09a7fa520f24b01be726"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"Use instead"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(define-fun R ((x A) (y A)) Bool ((_ partial-order 0) x y))\n")),(0,i.kt)("p",null,"We are using the index 0 to identify the partial order relation ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),". To create a different relation that is also a partial order use\na different index, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"(_ partial-order 1)"),"."),(0,i.kt)("h3",{id:"linear-order"},"Linear Order"),(0,i.kt)(o(),{input:{code:"(declare-sort A 0)\n(declare-fun R (A A) Bool)\n(assert (forall ((x A)) (R x x)))\n(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))\n(assert (forall ((x A) (y A)) (or (R x y) (R y x))))",result:{output:"",error:"",status:"z3-ran",hash:"5e8d4ce4957ecd58ebc182212b23f1789c183221"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"Use instead"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(define-fun R ((x A) (y A)) Bool ((_ linear-order 0) x y))\n")),(0,i.kt)("h3",{id:"tree-order"},"Tree Order"),(0,i.kt)(o(),{input:{code:"(declare-sort A 0)\n(declare-fun R (A A) Bool)\n(assert (forall ((x A)) (R x x)))\n(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R x z)) (or (R y z) (R z y)))))",result:{output:"",error:"",status:"z3-ran",hash:"79be6d8d51c850fb58e2ed3524d42e79e2d8b1ac"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"Use instead"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(define-fun R ((x A) (y A)) Bool ((_ tree-order 0) x y))\n")),(0,i.kt)("h3",{id:"piece-wise-linear-order"},"Piece-wise Linear Order"),(0,i.kt)(o(),{input:{code:"(declare-sort A 0)\n(declare-fun R (A A) Bool)\n(assert (forall ((x A)) (R x x)))\n(assert (forall ((x A) (y A)) (=> (and (R x y) (R y x)) (= x y))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R y z)) (R x z))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R x y) (R x z)) (or (R y z) (R z y)))))\n(assert (forall ((x A) (y A) (z A)) (=> (and (R y x) (R z x)) (or (R y z) (R z y)))))",result:{output:"",error:"",status:"z3-ran",hash:"496360a9f3b5bf0cddce1cfaba76049d82b6da7e"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("p",null,"Use instead"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(define-fun R ((x A) (y A)) Bool ((_ piecewise-linear-order 0) x y))\n")),(0,i.kt)("h2",{id:"transitive-closures"},"Transitive Closures"),(0,i.kt)("p",null,"The transitive closure of a relation is not first-order axiomatizable. However, the decision problem for ground formulas is decidable\nbecause for every binary relation ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," over a finite domain, the transitive closure of it is defined over the finite graph of ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),".\nThe small model property contrasts non-ground first-order formulas using transitive closure that are not first-order axiomatizable."),(0,i.kt)(o(),{input:{code:"(declare-sort A 0)\n(declare-fun R (A A) Bool)\n(declare-fun b () A)\n(declare-fun a () A)\n(declare-fun c () A)\n(assert (R a b))\n(assert (R b c))\n(assert (not ((_ transitive-closure R) a c)))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"59d4df6c19cbe7069632b900fe2879e05491815d"}},mdxType:"Z3CodeBlock"}))}f.isMDXComponent=!0}}]);