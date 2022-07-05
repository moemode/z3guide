"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4885],{6566:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var i=o(3117),a=(o(7294),o(3905)),s=o(7689);const n={title:"Advanced Topics",sidebar_position:7},r=void 0,l={unversionedId:"optimization/advancedtopics",id:"optimization/advancedtopics",title:"Advanced Topics",description:"Difference Logic",source:"@site/docs/optimization/07 - advancedtopics.md",sourceDirName:"optimization",slug:"/optimization/advancedtopics",permalink:"/z3guide/docs/optimization/advancedtopics",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/optimization/07 - advancedtopics.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Advanced Topics",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"A Small Case Study",permalink:"/z3guide/docs/optimization/asmallcasestudy"},next:{title:"Introduction",permalink:"/z3guide/docs/strategies/intro"}},c={},d=[{value:"Difference Logic",id:"difference-logic",level:2},{value:"Weighted Max-SAT solvers, a portfolio",id:"weighted-max-sat-solvers-a-portfolio",level:2}],p={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"difference-logic"},"Difference Logic"),(0,a.kt)("p",null,"Z3 uses by default an implementation of dual Simplex to solve feasibility and primal Simplex for optimality. For arithmetical constraints that only have differences between variables, known as difference logic, Z3 furthermore contains alternative decision procedures tuned for this domain. These have to be configured explicitly. There is a choice between a solver tuned for sparse constraints (where the ratio of variables is high compared to number of inequalities) and a solver tuned for dense constraints."),(0,a.kt)(s.Z,{input:{code:"(set-option :smt.arith.solver 1) ; enables difference logic solver for sparse constraints\n(set-option :smt.arith.solver 3) ; enables difference logic solver for dense constraints\n(declare-const x Int)\n(declare-const y Int)\n(assert (>= 10 x))\n(assert (>= x (+ y 7)))\n(maximize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) 13)\n)\n",error:"",status:"z3-ran",hash:"31348e42f666866cbb642b448c8ec69832bf9daf"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("h2",{id:"weighted-max-sat-solvers-a-portfolio"},"Weighted Max-SAT solvers, a portfolio"),(0,a.kt)("p",null,"The default solver for MaxSAT problems is the MaxRes algorithm. Several other alternative solvers are available. The default solver\nis chosen based on benchmarking against MaxSAT competition benchmarks, but other solver combinations, such as wmax, may work well for some domains.\nWhen the objectives are weighted by weights such as 1, 2, 4, 8, 16, such that the sum of weights in every prefix is lower than the next weight, the solver\nuses a lexicographic optimization algorithm that attempts to first solve for the highest weight before continuing with lower weights."),(0,a.kt)("p",null,"The other main MaxSAT algorithms avialable are"),(0,a.kt)(s.Z,{input:{code:"  (set-option :opt.maxsat_engine rc2)\n  (set-option :opt.maxsat_engine maxresbin)\n  (set-option :opt.maxsat_engine wmax)",result:{output:"",error:"",status:"z3-ran",hash:"b2f206c383d73fc68e82cb8f6966ebefbc228921"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"Pre-processing within the optimization solver will attempt to eliminate bounded arithmetical variables.\nFor example, the constraints"),(0,a.kt)(s.Z,{input:{code:"(declare-fun x () Int)\n(assert (<= x 1))\n(assert (>= x 0))\n(minimize x)\n(check-sat)",result:{output:"sat\n",error:"",status:"z3-ran",hash:"686b7e7f051cd864d4f32c3cfe4d6b7f28dbe784"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"get rewritten internally to a problem of the form"),(0,a.kt)(s.Z,{input:{code:"(declare-const x Bool)\n(assert-soft (not x))\n(check-sat)",result:{output:"sat\n",error:"",status:"z3-ran",hash:"d5701109964a8b266ab2a170ed8337e34ef1c86c"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"You can disable this transformation by setting"),(0,a.kt)(s.Z,{input:{code:"  (set-option :opt.elim_01 false)",result:{output:"",error:"",status:"z3-ran",hash:"70054b8afc1273d636f38f5564ebd307b7c7d95a"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"For problems that are either already bit-vector or Boolean or can be rewritten to this form, the engine uses a core solver based on a tuned SAT solver.\nYou can turn off the use of the SAT solver by setting:"),(0,a.kt)(s.Z,{input:{code:"  (set-option :opt.enable_sat false)",result:{output:"",error:"",status:"z3-ran",hash:"426381e049385b88db76c785f28a96faf586f8ea"}},mdxType:"Z3CodeBlock"}))}u.isMDXComponent=!0}}]);