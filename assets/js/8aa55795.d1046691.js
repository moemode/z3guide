"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[576],{8270:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(3117),o=(t(7294),t(3905)),n=t(7689);const i={title:"Goals",sidebar_position:2},l=void 0,r={unversionedId:"strategies/goals",id:"strategies/goals",title:"Goals",description:'Z3 implements a methodology for orchestrating reasoning engines where "big" symbolic reasoning steps are represented as functions known as tactics, and tactics are composed using combinators known as tacticals. Tactics process sets of formulas called Goals.',source:"@site/docs/strategies/02 - goals.md",sourceDirName:"strategies",slug:"/strategies/goals",permalink:"/z3guide/docs/strategies/goals",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/strategies/02 - goals.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Goals",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/z3guide/docs/strategies/intro"},next:{title:"Tactics",permalink:"/z3guide/docs/strategies/tactics"}},c={},d=[],p={toc:d};function u(e){let{components:s,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:s,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Z3 implements a methodology for orchestrating reasoning engines where "big" symbolic reasoning steps are represented as functions known as tactics, and tactics are composed using combinators known as tacticals. Tactics process sets of formulas called Goals.'),(0,o.kt)("p",null,"When a tactic is applied to some goal G, four different outcomes are possible. In SMT 2.0, the goal is the conjunction of all assertions. The tactic succeeds in showing G to be satisfiable (i.e., feasible); succeeds in showing G to be unsatisfiable (i.e., infeasible); produces a sequence of subgoals; or fails. When reducing a goal G to a sequence of subgoals G1, ..., Gn, we face the problem of model conversion. A model converter construct a model for G using a model for some subgoal Gi."),(0,o.kt)("p",null,"In the following example, we use the command apply to execute a tactic composed of two built-in tactics: simplify and solve-eqs. The tactic simplify apply transformations equivalent to the ones found in the command simplify. The tactic solver-eqs eliminate variables using Gaussian elimination. Actually, solve-eqs is not restricted only to linear arithmetic. It can also eliminate arbitrary variables. Then, combinator then applies simplify to the input goal and solve-eqs to each subgoal produced by simplify. In this example, only one subgoal is produced."),(0,o.kt)(n.Z,{input:{code:"(declare-const x Real)\n(declare-const y Real)\n\n(assert (> x 0.0))\n(assert (> y 0.0))\n(assert (= x (+ y 2.0)))\n\n(apply (then simplify solve-eqs))",result:{output:"(goals\n(goal\n  (not (<= y (- 2.0)))\n  (not (<= y 0.0))\n  :precision precise :depth 2)\n)\n",error:"",status:"z3-ran",hash:"8fbf2ddc9fdd2f93d7f168b04bb4427fb6d9cfba"}},mdxType:"Z3CodeBlock"}),(0,o.kt)("p",null,"In the example above, variable x is eliminated, and is not present the resultant goal."),(0,o.kt)("p",null,"In Z3, we say a clause is any constraint of the form (or f_1 ... f_n). The tactic split-clause will select a clause (or f_1 ... f_n) in the input goal, and split it n subgoals. One for each subformula f_i."),(0,o.kt)(n.Z,{input:{code:"(declare-const x Real)\n(declare-const y Real)\n\n(assert (or (< x 0.0) (> x 0.0)))\n(assert (= x (+ y 1.0)))\n(assert (< y 0.0))\n\n(apply split-clause)",result:{output:"(goals\n(goal\n  (< x 0.0)\n  (= x (+ y 1.0))\n  (< y 0.0)\n  :precision precise :depth 1)\n(goal\n  (> x 0.0)\n  (= x (+ y 1.0))\n  (< y 0.0)\n  :precision precise :depth 1)\n)\n",error:"",status:"z3-ran",hash:"36848d51c0a7208defaec903cfbd3c0c5048491d"}},mdxType:"Z3CodeBlock"}))}u.isMDXComponent=!0}}]);