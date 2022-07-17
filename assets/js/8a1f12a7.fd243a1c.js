"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5832],{9141:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=o(3117),a=(o(7294),o(3905)),s=o(3234),n=o.n(s);const r={title:"Advanced Topics",sidebar_position:7},l=void 0,c={unversionedId:"optimization/advancedtopics",id:"optimization/advancedtopics",title:"Advanced Topics",description:"Difference Logic",source:"@site/docs/04 - optimization/07 - advancedtopics.md",sourceDirName:"04 - optimization",slug:"/optimization/advancedtopics",permalink:"/z3guide/docs/optimization/advancedtopics",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs/04 - optimization/07 - advancedtopics.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Advanced Topics",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"A Small Case Study",permalink:"/z3guide/docs/optimization/asmallcasestudy"},next:{title:"Introduction",permalink:"/z3guide/docs/fixedpoints/intro"}},d={},p=[{value:"Difference Logic",id:"difference-logic",level:2},{value:"Weighted Max-SAT solvers, a portfolio",id:"weighted-max-sat-solvers-a-portfolio",level:2}],u={toc:p};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"difference-logic"},"Difference Logic"),(0,a.kt)("p",null,"Z3 uses by default an implementation of dual Simplex to solve feasibility and primal Simplex for optimality. For arithmetical constraints that only have differences between variables, known as difference logic, Z3 furthermore contains alternative decision procedures tuned for this domain. These have to be configured explicitly. There is a choice between a solver tuned for sparse constraints (where the ratio of variables is high compared to number of inequalities) and a solver tuned for dense constraints."),(0,a.kt)(n(),{input:{code:"(set-option :smt.arith.solver 1) ; enables difference logic solver for sparse constraints\n(set-option :smt.arith.solver 3) ; enables difference logic solver for dense constraints\n(declare-const x Int)\n(declare-const y Int)\n(assert (>= 10 x))\n(assert (>= x (+ y 7)))\n(maximize (+ x y))\n(check-sat)\n(get-objectives)",result:{output:"sat\n(objectives\n ((+ x y) 13)\n)\n",error:"",status:"z3-ran",hash:"655187260709bcab48157b2a4d296224243e805f"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("h2",{id:"weighted-max-sat-solvers-a-portfolio"},"Weighted Max-SAT solvers, a portfolio"),(0,a.kt)("p",null,"The default solver for MaxSAT problems is the MaxRes algorithm. Several other alternative solvers are available. The default solver\nis chosen based on benchmarking against MaxSAT competition benchmarks, but other solver combinations, such as wmax, may work well for some domains.\nWhen the objectives are weighted by weights such as 1, 2, 4, 8, 16, such that the sum of weights in every prefix is lower than the next weight, the solver\nuses a lexicographic optimization algorithm that attempts to first solve for the highest weight before continuing with lower weights."),(0,a.kt)("p",null,"The other main MaxSAT algorithms available are"),(0,a.kt)(n(),{input:{code:"  (set-option :opt.maxsat_engine rc2)\n  (set-option :opt.maxsat_engine maxresbin)\n  (set-option :opt.maxsat_engine wmax)",result:{output:"",error:"",status:"z3-ran",hash:"cb5ad87d2099582cb6261fc15e4c794f25cc52c9"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"Pre-processing within the optimization solver will attempt to eliminate bounded arithmetical variables.\nFor example, the constraints"),(0,a.kt)(n(),{input:{code:"(declare-fun x () Int)\n(assert (<= x 1))\n(assert (>= x 0))\n(minimize x)\n(check-sat)",result:{output:"sat\n",error:"",status:"z3-ran",hash:"37ee91ea824ceac41def722eef8e15ebd4f59622"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"get rewritten internally to a problem of the form"),(0,a.kt)(n(),{input:{code:"(declare-const x Bool)\n(assert-soft (not x))\n(check-sat)",result:{output:"sat\n",error:"",status:"z3-ran",hash:"8c22e0dcba04321984bb945ffc9a520ef17e084d"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"You can disable this transformation by setting"),(0,a.kt)(n(),{input:{code:"  (set-option :opt.elim_01 false)",result:{output:"",error:"",status:"z3-ran",hash:"cf71540a3eba630404bd721ac0a62571b8464659"}},mdxType:"Z3CodeBlock"}),(0,a.kt)("p",null,"For problems that are either already bit-vector or Boolean or can be rewritten to this form, the engine uses a core solver based on a tuned SAT solver.\nYou can turn off the use of the SAT solver by setting:"),(0,a.kt)(n(),{input:{code:"  (set-option :opt.enable_sat false)",result:{output:"",error:"",status:"z3-ran",hash:"1898ae02b7e7a37178b13c4d4310dd34c99857a7"}},mdxType:"Z3CodeBlock"}))}h.isMDXComponent=!0}}]);