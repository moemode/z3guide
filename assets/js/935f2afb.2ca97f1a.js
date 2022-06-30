"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Z3 Guide Introduction","href":"/rise4fun/docs/intro","docId":"intro"},{"type":"category","label":"Basic Commands","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Basic Commands","href":"/rise4fun/docs/basic-commands/basic-commands","docId":"basic-commands/basic-commands"},{"type":"link","label":"Using Scopes","href":"/rise4fun/docs/basic-commands/using-scopes","docId":"basic-commands/using-scopes"},{"type":"link","label":"Configuration","href":"/rise4fun/docs/basic-commands/configuration","docId":"basic-commands/configuration"}],"href":"/rise4fun/docs/category/basic-commands"},{"type":"link","label":"Propositional Logic","href":"/rise4fun/docs/propositional-logic","docId":"propositional-logic"},{"type":"link","label":"Uninterpreted Functions and Constants","href":"/rise4fun/docs/Uninterpreted-functions-and-constants","docId":"Uninterpreted-functions-and-constants"},{"type":"category","label":"Arithmetic","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Division","href":"/rise4fun/docs/Arithmetic/division","docId":"Arithmetic/division"}],"href":"/rise4fun/docs/category/arithmetic"},{"type":"link","label":"Bitvectors","href":"/rise4fun/docs/Bitvectors","docId":"Bitvectors"},{"type":"link","label":"Arrays","href":"/rise4fun/docs/arrays","docId":"arrays"},{"type":"link","label":"Datatypes","href":"/rise4fun/docs/Datatypes","docId":"Datatypes"},{"type":"link","label":"Strings, Sequences and Regular Expressions","href":"/rise4fun/docs/Sequences","docId":"Sequences"},{"type":"link","label":"Quantifiers","href":"/rise4fun/docs/Quantifiers","docId":"Quantifiers"},{"type":"link","label":"Conclusion","href":"/rise4fun/docs/Conclusion","docId":"Conclusion"},{"type":"link","label":"test","href":"/rise4fun/docs/test","docId":"test"}]},"docs":{"Arithmetic/division":{"id":"Arithmetic/division","title":"Division","description":"Z3 also has support for division, integer division, modulo and remainder operators. Internally, they are all mapped to multiplication.","sidebar":"tutorialSidebar"},"arrays":{"id":"arrays","title":"Arrays","description":"As part of formulating a programme of a mathematical theory of computation McCarthy proposed a basic theory of arrays as characterized by the select-store axioms. The expression (select a i) returns the value stored at position i of the array a; and (store a i v) returns a new array identical to a, but on position i it contains the value v.","sidebar":"tutorialSidebar"},"basic-commands/basic-commands":{"id":"basic-commands/basic-commands","title":"Basic Commands","description":"The Z3 input format is an extension of the one defined by the SMT-LIB 2.0 standard. A Z3 script is a sequence of commands. The help command displays a list of all available commands. The command echo displays a message. Internally, Z3 maintains a stack of user provided formulas and declarations. We say these are the assertions provided by the user. The command declare-const declares a constant of a given type (aka sort). The command declare-fun declares a function. In the following example, we declared a function that receives an integer and a boolean, and returns an integer.","sidebar":"tutorialSidebar"},"basic-commands/configuration":{"id":"basic-commands/configuration","title":"Configuration","description":"The command set-option is used to configure Z3. Z3 has several options to control its behavior. Some of these options (e.g., produce-proofs) can only be set before any declaration or assertion. We use the reset command to erase all assertions and declarations. After the reset command, all configuration options can be set.","sidebar":"tutorialSidebar"},"basic-commands/using-scopes":{"id":"basic-commands/using-scopes","title":"Using Scopes","description":"In some applications, we want to explore several similar problems that share several definitions and assertions. We can use the commands push and pop for doing that. Z3 maintains a global stack of declarations and assertions. The command push creates a new scope by saving the current stack size. The command pop removes any assertion or declaration performed between it and the matching push. The check-sat and get-assertions commands always operate on the content of the global stack.","sidebar":"tutorialSidebar"},"Bitvectors":{"id":"Bitvectors","title":"Bitvectors","description":"Modern CPUs and main-stream programming languages use arithmetic over fixed-size bit-vectors. The theory of bit-vectors allows modeling the precise semantics of unsigned and of signed two-complements arithmetic. There are a large number of supported functions and relations over bit-vectors. They are summarized on Z3\'s documentation link here! of the binary APIs and they are summarized on the SMT-LIB link here!  web-site. We will not try to give a comprehensive overview here, but touch on some of the main features.","sidebar":"tutorialSidebar"},"Conclusion":{"id":"Conclusion","title":"Conclusion","description":"Z3 is an efficient theorem prover used in many software testing, analysis and verification applications. In this tutorial, we covered its main capabilities using the textual interface. However, most applications use the Z3 programmatic API to access these features.","sidebar":"tutorialSidebar"},"Datatypes":{"id":"Datatypes","title":"Datatypes","description":"Algebraic datatypes, known from programming languages such as ML, offer a convenient way for specifying common data structures. Records and tuples are special cases of algebraic datatypes, and so are scalars (enumeration types). But algebraic datatypes are more general. They can be used to specify finite lists, trees and other recursive structures.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Z3 Guide Introduction","description":"Z3 is a state-of-the art theorem prover from Microsoft Research. It can be used to check the satisfiability of logical formulas over one or more theories. Z3 offers a compelling match for software analysis and verification tools, since several common software constructs map directly into supported theories.","sidebar":"tutorialSidebar"},"propositional-logic":{"id":"propositional-logic","title":"Propositional Logic","description":"The pre-defined sort Bool is the sort (type) of all Boolean propositional expressions. Z3 supports the usual Boolean operators and, or, xor, not, = (implication), ite (if-then-else). Bi-implications are represented using equatity =. The following example shows how to prove that if p implies q and q implies r, then p implies r. We accomplish that by showing that the negation is unsatisfiable. The command define-fun is used to define a macro (aka alias). In this example, conjecture is an alias for the conjecture we want to prove.","sidebar":"tutorialSidebar"},"Quantifiers":{"id":"Quantifiers","title":"Quantifiers","description":"Z3 is a decision procedure for the combination of the previous quantifier-free theories. That is, it can answer whether a quantifier-free formula, modulo the theories referenced by the formula, is satisfiable or whether it is unsatisfiable. Z3 also accepts and can work with formulas that use quantifiers. It is no longer a decision procedure for such formulas in general (and for good reasons, as there can be no decision procedure for first-order logic).","sidebar":"tutorialSidebar"},"Sequences":{"id":"Sequences","title":"Strings, Sequences and Regular Expressions","description":"Introduction","sidebar":"tutorialSidebar"},"test":{"id":"test","title":"test","description":"hi","sidebar":"tutorialSidebar"},"Uninterpreted-functions-and-constants":{"id":"Uninterpreted-functions-and-constants","title":"Uninterpreted Functions and Constants","description":"The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function.","sidebar":"tutorialSidebar"}}}')}}]);