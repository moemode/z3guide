"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[178],{1199:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>u,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>k});var l=n(3117),r=(n(7294),n(3905)),s=n(7689);const o={},u=void 0,i={unversionedId:"Regular Expressions",id:"Regular Expressions",title:"Regular Expressions",description:"-------",source:"@site/docs/10 - Regular Expressions.md",sourceDirName:".",slug:"/Regular Expressions",permalink:"/rise4fun/docs/Regular Expressions",draft:!1,editUrl:"https://github.com/microsoft/rise4fun/tree/main/website/docs/10 - Regular Expressions.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Strings and Sequences",permalink:"/rise4fun/docs/Sequences"},next:{title:"Quantifiers",permalink:"/rise4fun/docs/Quantifiers"}},a={},k=[{value:"sidebar_position: 10",id:"sidebar_position-10",level:2}],d={toc:k};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"title: Regular Expressions"),(0,r.kt)("h2",{id:"sidebar_position-10"},"sidebar_position: 10"),(0,r.kt)("p",null,"The sort constructor ",(0,r.kt)("tt",null,"RegEx")," takes as argument a sequence type.\nThe set of regular expressions over strings is thus ",(0,r.kt)("tt",null,"(RegEx String)"),"."),(0,r.kt)("h1",{id:"operations"},"Operations"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Operation"),(0,r.kt)("td",null,"Brief description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.to.re s)")),(0,r.kt)("td",null,"Convert string to regular expression accepting ",(0,r.kt)("tt",null,"s"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(str.in.re s r)")),(0,r.kt)("td",null,"Determine if ",(0,r.kt)("tt",null,"s")," is in the language generated by ",(0,r.kt)("tt",null,"r"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"re.allchar")),(0,r.kt)("td",null,"The regular expression accepting every string.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"re.nostr")),(0,r.kt)("td",null,"The regular expression rejecting every string.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(re.range ch1 ch2)")),(0,r.kt)("td",null,"The range of characters between ",(0,r.kt)("tt",null,"ch1")," and ",(0,r.kt)("tt",null,"ch2"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(re.++ r1 r2 r3)")),(0,r.kt)("td",null,"Concatenation of regular expressions.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(re.* r)")),(0,r.kt)("td",null,"Kleene star.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(re.+ r)")),(0,r.kt)("td",null,"Kleene plus.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(re.opt r)")),(0,r.kt)("td",null,"Zero or one use of ",(0,r.kt)("tt",null,"r"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"((_ re.loop lo hi) r)")),(0,r.kt)("td",null,"from ",(0,r.kt)("tt",null,"lo")," to ",(0,r.kt)("tt",null,"hi")," number of repetitions of ",(0,r.kt)("tt",null,"r"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(re.union r1 r2)")),(0,r.kt)("td",null,"The union of regular languages.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(re.inter r1 r2)")),(0,r.kt)("td",null,"The intersection of regular languages. ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.to.re s)")),(0,r.kt)("td",null,"Convert sequenceto regular expression accepting ",(0,r.kt)("tt",null,"s"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(seq.in.re s r)")),(0,r.kt)("td",null,"Determine if sequence ",(0,r.kt)("tt",null,"s")," is in the language generated by ",(0,r.kt)("tt",null,"r"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(as re.all R)")),(0,r.kt)("td",null,"The regular expression of sort ",(0,r.kt)("tt",null,"R")," accepting every sequence.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("tt",null,"(as re.empty R)")),(0,r.kt)("td",null,"The regular expression of sort ",(0,r.kt)("tt",null,"R")," rejecting every sequence."))),(0,r.kt)("p",null,"The ",(0,r.kt)("tt",null,"re.range")," operator expects two strings each encoding a single character.\nFor example ",(0,r.kt)("tt",null,'(str.range "a" "\\xff")')," is a valid range of characters,\nwhile ",(0,r.kt)("tt",null,'(str.range "aa" "")')," is not associated with any specified range. "),(0,r.kt)("p",null,"For added compatibility with CVC4's format,\nZ3 also accepts expressions of the form ",(0,r.kt)("tt",null,"(re.loop r lo hi)"),".\nZ3 understands only the meaning of these terms when ",(0,r.kt)("tt",null,"lo, hi")," are\ninteger numerals."),(0,r.kt)("h1",{id:"what-not-to-expect-of-regular-expressions"},"What (not) to expect of regular expressions"),(0,r.kt)("p",null,"Z3 converts regular expressions into non-deterministic finite automata and\nexpands membership constraints over symbolic strings and sequences\nwhen it tries to satisfy constraints. This approach works for many\nmembership and non-membership constraints, but is not a complete\nprocedure (and even less complete when there are other constraints\non the symbolic strings).\nIt also does not handle regular expressions symbolic sequences (it allows\nto express non-regular languages).\nThus, the string ",(0,r.kt)("tt",null,"s")," in ",(0,r.kt)("tt",null,"(str.to.re s)")," should be\na string literal. You can write formulas with equalities over\nregular expressions, but chances are that Z3 will not do anything\nprofound with them. Therefore, for now, use regular expressions only in\nconstraints of the form ",(0,r.kt)("tt",null,"(str.in.re s r)"),"."),(0,r.kt)("h1",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The maximal length is 6 for a string of length 2 repeated at most 3 times."),(0,r.kt)(s.Z,{input:{code:'(declare-const a String)\n(push)\n(set-info :status sat)\n(assert (str.in.re a ((_ re.loop 1 3) (str.to.re "ab"))))\n(assert (= (str.len a) 6))\n(check-sat)\n(get-model)\n(pop)\n\n(push)\n(set-info :status unsat)\n(assert (str.in.re a ((_ re.loop 1 3) (str.to.re "ab"))))\n(assert (> (str.len a) 6))\n(check-sat)\n(pop)'},mdxType:"Z3CodeBlock"}))}p.isMDXComponent=!0}}]);