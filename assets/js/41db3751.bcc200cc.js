"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7262],{3711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(3117),i=(n(7294),n(3905)),r=n(3234),o=n.n(r);const l={title:"Syntax",sidebar_position:5},s=void 0,p={unversionedId:"fixedpoints/syntax",id:"fixedpoints/syntax",title:"Syntax",description:"Three different text-based input formats are accepted.",source:"@site/docs/05 - fixedpoints/05 - syntax.md",sourceDirName:"05 - fixedpoints",slug:"/fixedpoints/syntax",permalink:"/z3guide/docs/fixedpoints/syntax",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/05 - fixedpoints/05 - syntax.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Syntax",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Generalized PDR",permalink:"/z3guide/docs/fixedpoints/engineforpdr"},next:{title:"Playground",permalink:"/z3guide/docs/playground/playground"}},d={},m=[{value:"Basic datalog",id:"basic-datalog",level:2},{value:"SMT-LIB2 extension",id:"smt-lib2-extension",level:2},{value:"Pure SMT-LIB2",id:"pure-smt-lib2",level:2},{value:"Note the following:",id:"note-the-following",level:2},{value:"Programmatic API",id:"programmatic-api",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Three different text-based input formats are accepted."),(0,i.kt)("h2",{id:"basic-datalog"},"Basic datalog"),(0,i.kt)("p",null,"Files with suffix .datalog are parsed using the BDDBDDB format. The format can be used for comparing benchmarks with the BDDBDDB tool."),(0,i.kt)("p",null,"We use an artificial program to illustrate the basic Datalog format that complies to the format used by BDDBDDB."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Z 64\n\nP0(x: Z) input\nGt0(x : Z, y : Z) input\nR(x : Z) printtuples\nS(x : Z) printtuples\nGt(x : Z, y : Z) printtuples\nGt(x,y) :- Gt0(x,y).\nGt(x,y) :- Gt(x,z), Gt(z,y).\nR(x) :- Gt(x,_).\nS(x) :- Gt(x,x0), Gt0(x,y), Gt0(y,z), P0(z).\nGt0("a","b").\nGt0("b","c").\nGt0("c","d").\nGt0("a1","b").\nGt0("b","a1").\nGt0("d","d1").\nGt0("d1","d").\nP0("a1").\n')),(0,i.kt)("h2",{id:"smt-lib2-extension"},"SMT-LIB2 extension"),(0,i.kt)("p",null,"The following commands are added to the SMT-LIB2 syntax:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(declare-var [var] [sort])")," Declare a variable that is universally quantified in Horn clauses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(declare-rel [relation-name] ([sorts]))")," Declare relation signature. Relations are uninterpreted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(rule [universal-horn-formula])")," Assert a rule or a fact as a universally quantified Horn formula."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(query [relation-name])")," Pose a query. Is the relation non-empty."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(set-predicate-representation [function-name] [symbol]+)")," Specify the representation of a predicate.")),(0,i.kt)("h2",{id:"pure-smt-lib2"},"Pure SMT-LIB2"),(0,i.kt)("p",null,"Many problems about program safety can be reduced to Constrained Horn clause satisfiability, where constraints are modulo theories (typically of arithmetic). These problems are expressible directly in SMT-LIB2. The repository of Horn clause benchmarks in SMT-LIB2 contains more than 10,000 samples taken from different benchmarks and different encodings of the same benchmarks. An assertion is Horn if it is an implication; the head of the implication is either a formula using only interpreted functions, or it is an uninterpreted predicate; the body of the implication is a formula in negation normal form where the uninterpreted predicates occur positively."),(0,i.kt)(o(),{input:{code:"(set-logic HORN)\n(declare-fun mc (Int Int) Bool)\n\n(assert (forall ((m Int)) (=> (> m 100) (mc m (- m 10)))))\n(assert (forall ((m Int) (n Int) (p Int)) \n           (=> (and (<= m 100) (mc (+ m 11) p) (mc p n)) (mc m n))))\n\n(assert (forall ((m Int) (n Int))\n       (=> (and (mc m n) (<= m 101)) (= n 91))))\n(check-sat)\n(get-model)",result:{output:"",error:"",status:"z3-ran",hash:"1baf41d8f3970051c130f1d1f5623106c0dc5a17"}},mdxType:"Z3CodeBlock"}),(0,i.kt)("h2",{id:"note-the-following"},"Note the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To ensure that the fixedpoint engine is used, specify ",(0,i.kt)("inlineCode",{parentName:"li"},"(set-logic HORN)")),(0,i.kt)("li",{parentName:"ul"},"There is no separate query. Instead, queries correspond to Horn clause that have no positive occurrence of any uninterpreted relation.")),(0,i.kt)("h2",{id:"programmatic-api"},"Programmatic API"),(0,i.kt)("p",null,"You can interact with muZ over the programmatic API from ",(0,i.kt)("a",{parentName:"p",href:"https://z3prover.github.io/api/html/classz3py_1_1_fixedpoint.html"},"Python"),", ",(0,i.kt)("a",{parentName:"p",href:"https://z3prover.github.io/api/html/z3__fixedpoint_8h.html"},"C"),", ",(0,i.kt)("a",{parentName:"p",href:"https://z3prover.github.io/api/html/classz3_1_1fixedpoint.html"},"C++"),", OCaml, Java, and .NET. The APIs support adding rules and posing queries."))}c.isMDXComponent=!0}}]);