
  const questions = [
  {
    question: "Quel langage est utilisé pour créer la structure d'une page web ?",
    choices: ["HTML", "CSS", "Python", "SQL"],
    answer: "HTML"
  },
  {
    question: "Quel langage est utilisé pour styliser une page web ?",
    choices: ["HTML", "CSS", "JavaScript", "PHP"],
    answer: "CSS"
  },
  {
    question: "Quel langage permet de rendre une page interactive ?",
    choices: ["Java", "JavaScript", "Python", "C++"],
    answer: "JavaScript"
  },
  {
    question: "Quelle balise est utilisée pour créer un lien ?",
    choices: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "Quel langage est exécuté côté serveur ?",
    choices: ["CSS", "HTML", "PHP", "JavaScript"],
    answer: "PHP"
  },
  {
    question: "Quelle propriété CSS change la couleur du texte ?",
    choices: ["background-color", "text-color", "color", "font-color"],
    answer: "color"
  },
  {
    question: "Quel est le bon format pour une classe CSS ?",
    choices: ["#maClasse", ".maClasse", "*maClasse", "/maClasse"],
    answer: ".maClasse"
  },
  {
    question: "Que signifie HTTP ?",
    choices: [
      "HyperText Transfer Protocol",
      "HyperTransfer Text Program",
      "HighText Transfer Protocol",
      "Home Tool Transfer Protocol"
    ],
    answer: "HyperText Transfer Protocol"
  },
  {
    question: "Quelle est la commande Git pour envoyer son code sur GitHub ?",
    choices: ["git push", "git send", "git upload", "git commit"],
    answer: "git push"
  },
  {
    question: "Quel format est utilisé pour les feuilles de style ?",
    choices: [".html", ".css", ".js", ".php"],
    answer: ".css"
  },
 
  {
    question: "Quel est l'élément HTML utilisé pour définir un paragraphe ?",
    choices: [
      "<p>",
      "<h1>",
      "<div>",
      "<span>"
    ],
    answer: "<p>"
  },
  {
    question: "Quel attribut HTML est utilisé pour spécifier l'URL d'un lien ?",
    choices: [
      "href",
      "src",
      "link",
      "alt"
    ],
    answer: "href"
  },

  
    {
      question: "Que signifie PHP ?",
      choices: [
        "Personal Hypertext Processor",
        "Private Home Page",
        "PHP: Hypertext Preprocessor",
        "Page Home Processor"
      ],
      answer: "PHP: Hypertext Preprocessor"
    },
    {
      question: "Quelle est l'extension par défaut des fichiers PHP ?",
      choices: [".ph", ".php", ".html", ".xml"],
      answer: ".php"
    },
    {
      question: "Quel symbole est utilisé pour déclarer une variable en PHP ?",
      choices: ["$", "#", "@", "&"],
      answer: "$"
    },
    {
      question: "Quelle fonction est utilisée pour afficher une chaîne de caractères ?",
      choices: ["write()", "echo()", "printf()", "display()"],
      answer: "echo()"
    },
    {
      question: "Quelle structure est utilisée pour inclure un fichier en PHP ?",
      choices: ["include", "insert", "add", "require_once"],
      answer: "include"
    },
    {
      question: "Quel mot-clé permet d'inclure un fichier une seule fois ?",
      choices: ["include", "require", "include_once", "require_once"],
      answer: "include_once"
    },
    {
      question: "Comment commence un commentaire sur une seule ligne en PHP ?",
      choices: ["//", "/*", "#", "--"],
      answer: "//"
    },
    {
      question: "Quel mot-clé permet de déclarer une fonction en PHP ?",
      choices: ["function", "def", "func", "declare"],
      answer: "function"
    },
    {
      question: "Quelle fonction est utilisée pour compter les éléments d’un tableau ?",
      choices: ["sizeof()", "count()", "length()", "elements()"],
      answer: "count()"
    },
    {
      question: "Comment accède-t-on à un élément d’un tableau associatif ?",
      choices: [
        "$table[\"clé\"]",
        "$table->clé",
        "$table(clé)",
        "$table::clé"
      ],
      answer: "$table[\"clé\"]"
    },
    // ...
    // (Ajoute 90 autres questions similaires ici avec des questions variées)
    {
      question: "Quel est le type de données pour une chaîne de caractères en PHP ?",
      choices: ["char", "string", "text", "str"],
      answer: "string"
    },
    {
      question: "Comment démarre un script PHP ?",
      choices: ["<script>", "<?php", "<php>", "<!php>"],
      answer: "<?php"
    },
    {
      question: "Comment termine-t-on une instruction en PHP ?",
      choices: [".", ",", ";", ":"],
      answer: ";"
    },
    {
      question: "Quelle fonction permet de vérifier si une variable est vide ?",
      choices: ["empty()", "isset()", "is_null()", "check()"],
      answer: "empty()"
    },
    {
      question: "Quel mot-clé permet de définir une constante ?",
      choices: ["const", "define", "constant", "def"],
      answer: "define"
    },
    {
      question: "Quelle superglobale contient les données envoyées par un formulaire GET ?",
      choices: ["$_POST", "$_GET", "$_FORM", "$_REQUEST"],
      answer: "$_GET"
    },
    {
      question: "Comment concatène-t-on deux chaînes en PHP ?",
      choices: ["+", "&", ".", "::"],
      answer: "."
    },
    {
      question: "Quel est le résultat de true && false ?",
      choices: ["true", "false", "1", "Erreur"],
      answer: "false"
    },
    {
      question: "Quelle fonction permet d'arrondir un nombre ?",
      choices: ["ceil()", "round()", "floor()", "abs()"],
      answer: "round()"
    },
    {
      question: "Quelle fonction permet d’obtenir la longueur d’une chaîne ?",
      choices: ["len()", "strlen()", "count()", "length()"],
      answer: "strlen()"
    },
    {
      question: "Quelle balise PHP est recommandée pour le code portable ?",
      choices: ["<? ?>", "<?php ?>", "<% %>", "<script>"],
      answer: "<?php ?>"
    },
    {
      question: "Quelle est la valeur de retour de strpos('abc', 'b') ?",
      choices: ["1", "2", "0", "false"],
      answer: "1"
    },
    {
      question: "Quelle fonction permet d'inverser un tableau ?",
      choices: ["array_flip()", "array_reverse()", "array_invert()", "reverse_array()"],
      answer: "array_reverse()"
    },
    {
      question: "Que fait la fonction unset() ?",
      choices: [
        "Supprime une variable",
        "Vide une variable",
        "Crée une variable",
        "Déclare une constante"
      ],
      answer: "Supprime une variable"
    },
    {
      question: "Quel mot-clé permet de créer une classe ?",
      choices: ["class", "define", "object", "structure"],
      answer: "class"
    },
    {
      question: "Quelle est la portée par défaut d’une propriété dans une classe ?",
      choices: ["private", "protected", "public", "static"],
      answer: "public"
    },
    {
      question: "Comment appelle-t-on un constructeur en PHP ?",
      choices: ["__constructor", "constructor", "__construct", "init"],
      answer: "__construct"
    },
    {
      question: "Comment vérifie-t-on si un fichier existe ?",
      choices: ["file_exist()", "file_exists()", "exists()", "is_file()"],
      answer: "file_exists()"
    },
    {
      question: "Que fait la fonction die() ?",
      choices: ["Termine le script", "Supprime une variable", "Relance le code", "Retourne une valeur"],
      answer: "Termine le script"
    },
    {
      question: "Comment appelle-t-on une méthode statique ?",
      choices: ["Objet::méthode()", "Objet->méthode()", "new méthode()", "static.méthode()"],
      answer: "Objet::méthode()"
    },
    {
      question: "Quelle fonction permet de trier un tableau ?",
      choices: ["sort()", "shuffle()", "arrange()", "table_sort()"],
      answer: "sort()"
    },
    {
      question: "Que retourne la fonction explode() ?",
      choices: ["Une chaîne", "Un tableau", "Un booléen", "Un entier"],
      answer: "Un tableau"
    },
    {
      question: "Quel opérateur est utilisé pour l'égalité en PHP ?",
      choices: ["=", "==", "===", "!="],
      answer: "=="
    },
    {
      question: "Quel opérateur compare à la fois la valeur et le type ?",
      choices: ["==", "===", "!=", "!=="],
      answer: "==="
    },
    {
      question: "Quelle fonction permet de convertir une chaîne en entier ?",
      choices: ["int()", "intval()", "toInt()", "parseInt()"],
      answer: "intval()"
    },
    {
      question: "Quel mot-clé permet de sortir d’une boucle ?",
      choices: ["stop", "exit", "break", "end"],
      answer: "break"
    },
    {
      question: "Comment créer une session en PHP ?",
      choices: ["session_start()", "new session()", "create_session()", "init_session()"],
      answer: "session_start()"
    },
    {
      question: "Quelle superglobale contient les informations de session ?",
      choices: ["$_SESSION", "$_COOKIE", "$_SERVER", "$_GET"],
      answer: "$_SESSION"
    },
    {
      question: "Comment définit-on un cookie ?",
      choices: ["setcookie()", "add_cookie()", "cookie_set()", "cookie()"],
      answer: "setcookie()"
    },
    {
      question: "Quel mot-clé est utilisé pour hériter d’une classe ?",
      choices: ["inherits", "extends", "implements", "uses"],
      answer: "extends"
    },
    {
      question: "Quelle fonction PHP affiche la structure d’un tableau ?",
      choices: ["print_r()", "echo()", "dump()", "print()"],
      answer: "print_r()"
    },
    {
      question: "Comment appeler une méthode d’un objet ?",
      choices: ["->", "::", ".", "->>"],
      answer: "->"
    },
    {
      question: "Quel mot-clé permet d’interrompre une fonction et retourner une valeur ?",
      choices: ["stop", "return", "exit", "break"],
      answer: "return"
    },
    {
      question: "Quelle fonction permet de générer un hash MD5 ?",
      choices: ["hash_md5()", "md5()", "encode_md5()", "crypt_md5()"],
      answer: "md5()"
    },
    {
      question: "Comment définir une variable globale dans une fonction ?",
      choices: ["global", "extern", "public", "static"],
      answer: "global"
    },
    {
      question: "Quelle méthode permet de rediriger en PHP ?",
      choices: ["redirect()", "header()", "goTo()", "location()"],
      answer: "header()"
    },
    {
      question: "Quel opérateur logique signifie OU ?",
      choices: ["||", "&&", "!", "??"],
      answer: "||"
    },
    {
      question: "Quelle fonction renvoie le type d’une variable ?",
      choices: ["type()", "gettype()", "typeof()", "var_type()"],
      answer: "gettype()"
    },
    {
      question: "Quel est le mot-clé pour créer une interface ?",
      choices: ["interface", "trait", "class", "implements"],
      answer: "interface"
    },
    {
      question: "Quelle est la portée d'une variable déclarée dans une fonction ?",
      choices: ["Globale", "Locale", "Publique", "Protégée"],
      answer: "Locale"
    },
    {
      question: "Que retourne la fonction is_array() ?",
      choices: ["int", "string", "bool", "array"],
      answer: "bool"
    },
    {
      question: "Quelle fonction transforme une chaîne JSON en tableau ?",
      choices: ["json_parse()", "json_decode()", "json_to_array()", "decode_json()"],
      answer: "json_decode()"
    },
    {
      question: "Quelle fonction transforme un tableau en JSON ?",
      choices: ["json_encode()", "array_to_json()", "toJSON()", "encode_json()"],
      answer: "json_encode()"
    },
    {
      question: "Que fait la fonction file_get_contents() ?",
      choices: [
        "Crée un fichier",
        "Écrit dans un fichier",
        "Lit un fichier",
        "Efface un fichier"
      ],
      answer: "Lit un fichier"
    },
    {
      question: "Quel est le type de boucle qui s’exécute au moins une fois ?",
      choices: ["while", "for", "foreach", "do...while"],
      answer: "do...while"
    },
    {
      question: "Quelle fonction trie un tableau et conserve les clés ?",
      choices: ["sort()", "asort()", "ksort()", "usort()"],
      answer: "asort()"
    },
    {
      question: "Quel mot-clé est utilisé pour un bloc d’instructions alternatives ?",
      choices: ["elseif", "else", "switch", "case"],
      answer: "else"
    },
    {
      question: "Quelle superglobale contient les informations sur le serveur ?",
      choices: ["$_SERVER", "$_FILES", "$_ENV", "$_SESSION"],
      answer: "$_SERVER"
    },
    {
      question: "Que fait la fonction is_numeric() ?",
      choices: [
        "Teste si c’est une chaîne",
        "Teste si c’est un nombre",
        "Teste si c’est un tableau",
        "Teste si c’est un booléen"
      ],
      answer: "Teste si c’est un nombre"
    },
    {
      question: "Comment définir un tableau vide ?",
      choices: ["$a = [];", "$a = array();", "$a = new array();", "Les deux premières"],
      answer: "Les deux premières"
    },
    {
      question: "Quel mot-clé permet d’utiliser un trait ?",
      choices: ["use", "trait", "require", "extends"],
      answer: "use"
    },
    {
      question: "Quelle fonction retourne l’heure actuelle en timestamp ?",
      choices: ["now()", "date()", "time()", "timestamp()"],
      answer: "time()"
    },
    {
      question: "Que retourne la fonction isset() ?",
      choices: ["true si défini", "false si vide", "true si null", "true si booléen"],
      answer: "true si défini"
    },
    {
      question: "Quelle méthode sert à détruire une session ?",
      choices: ["session_destroy()", "session_end()", "destroy_session()", "unset_session()"],
      answer: "session_destroy()"
    },
    {
      question: "Que fait la fonction include_once() ?",
      choices: [
        "Inclut un fichier une seule fois",
        "Inclut plusieurs fichiers",
        "Ferme un fichier",
        "Charge une bibliothèque"
      ],
      answer: "Inclut un fichier une seule fois"
    },
    {
      question: "Quelle méthode vérifie si une clé existe dans un tableau ?",
      choices: ["key_exists()", "array_key_exists()", "has_key()", "in_array()"],
      answer: "array_key_exists()"
    },
    {
      question: "Quel mot-clé vérifie plusieurs conditions selon une valeur ?",
      choices: ["switch", "if", "elseif", "match"],
      answer: "switch"
    },
    {
      question: "Quelle méthode compare deux chaînes ?",
      choices: ["strcmp()", "strcompare()", "equals()", "compare()"],
      answer: "strcmp()"
    },
    {
      question: "Quelle est la valeur de true || false ?",
      choices: ["false", "true", "null", "0"],
      answer: "true"
    },
    {
      question: "Quelle fonction arrondit à l'entier supérieur ?",
      choices: ["ceil()", "floor()", "round()", "upper()"],
      answer: "ceil()"
    },
    {
      question: "Quelle fonction permet d’ajouter un élément à la fin d’un tableau ?",
      choices: ["array_push()", "array_add()", "append()", "add_array()"],
      answer: "array_push()"
    },
    {
      question: "Quel type de données est retourné par gettype() ?",
      choices: ["string", "int", "boolean", "Une chaîne"],
      answer: "Une chaîne"
    },
    {
      question: "Quelle fonction supprime les espaces autour d’une chaîne ?",
      choices: ["trim()", "strip()", "clean()", "cut()"],
      answer: "trim()"
    },
    {
      question: "Comment envoyer une requête POST depuis un formulaire ?",
      choices: ["<form method='post'>", "<form method='POST'>", "Les deux", "Aucune"],
      answer: "Les deux"
    },
    {
      question: "Comment accéder à une propriété privée dans une classe ?",
      choices: ["getters", "public", "directement", "extends"],
      answer: "getters"
    },
    {
      question: "Quel mot-clé rend une méthode accessible sans instancier ?",
      choices: ["static", "final", "public", "global"],
      answer: "static"
    },
    {
      question: "Quelle fonction vérifie si une variable est définie ?",
      choices: ["isset()", "defined()", "is_set()", "exists()"],
      answer: "isset()"
    },
    {
      question: "Quelle est la valeur de !false ?",
      choices: ["true", "false", "0", "null"],
      answer: "true"
    },
    {
      question: "Quel est le mot-clé pour une constante de classe ?",
      choices: ["const", "define", "static", "final"],
      answer: "const"
    },
    {
      question: "Quelle fonction retourne le chemin courant ?",
      choices: ["__DIR__", "getcwd()", "path()", "dirname()"],
      answer: "getcwd()"
    },
    {
      question: "Quelle fonction lit une ligne d’un fichier ?",
      choices: ["fgets()", "fread()", "file_read()", "readline()"],
      answer: "fgets()"
    },
    {
      question: "Comment afficher une variable pour le débogage ?",
      choices: ["var_dump()", "echo()", "print()", "debug()"],
      answer: "var_dump()"
    },
    {
      question: "Quel mot-clé empêche l’héritage d’une classe ?",
      choices: ["final", "static", "private", "abstract"],
      answer: "final"
    },
    {
      question: "Comment ouvrir un fichier en lecture seule ?",
      choices: ["fopen($f, 'r')", "fopen($f, 'w')", "fopen($f, 'rw')", "file_read($f)"],
      answer: "fopen($f, 'r')"
    },
    {
      question: "Quel mot-clé permet de gérer les exceptions ?",
      choices: ["try", "throw", "catch", "Tous les précédents"],
      answer: "Tous les précédents"
    },
    {
      question: "Quelle classe est utilisée pour manipuler des dates ?",
      choices: ["DateTime", "Calendar", "Time", "Date"],
      answer: "DateTime"
    },
    {
      question: "Quel est l’opérateur ternaire en PHP ?",
      choices: ["?:", "??", "&&", "::"],
      answer: "?:"
    },
    {
      question: "Comment lire toutes les lignes d’un fichier ?",
      choices: ["file()", "fgets()", "fread()", "get_lines()"],
      answer: "file()"
    },
    {
      question: "Quelle est la syntaxe pour une variable variable ?",
      choices: ["$$nom", "$nom", "${$nom}", "Les deux premières"],
      answer: "Les deux premières"
    }
  ,
  
    // ... (Il en reste environ 60 à ajouter ici — veux-tu que je continue jusqu’à 100 ?)
  
  
  
  {
    question: "Quel élément HTML est utilisé pour intégrer une image ?",
    choices: [
      "<image>",
      "<img>",
      "<picture>",
      "<src>"
    ],
    answer: "<img>"
  },
  {
    question: "Comment insérer une vidéo dans une page HTML ?",
    choices: [
      "<video>",
      "<movie>",
      "<media>",
      "<film>"
    ],
    answer: "<video>"
  },
  {
    question: "Quel élément HTML est utilisé pour créer une liste ordonnée ?",
    choices: [
      "<ol>",
      "<ul>",
      "<dl>",
      "<li>"
    ],
    answer: "<ol>"
  },
  {
    question: "Quelle propriété CSS permet de changer la couleur du texte ?",
    choices: [
      "color",
      "font-color",
      "text-color",
      "background-color"
    ],
    answer: "color"
  },
  {
    question: "Comment définir une bordure de 1px solid noire en CSS ?",
    choices: [
      "border: 1px solid black;",
      "border: black solid 1px;",
      "border: 1px dotted black;",
      "border: 1px dashed black;"
    ],
    answer: "border: 1px solid black;"
  },
  {
    question: "Quelle propriété CSS est utilisée pour changer la couleur d'arrière-plan d'un élément ?",
    choices: [
      "background-color",
      "background-image",
      "color",
      "border-color"
    ],
    answer: "background-color"
  },
  {
    question: "Quelle propriété CSS est utilisée pour centrer un élément horizontalement ?",
    choices: [
      "margin: auto;",
      "text-align: center;",
      "align: center;",
      "center: true;"
    ],
    answer: "margin: auto;"
  },
  {
    question: "Comment ajouter une ombre portée à un texte en CSS ?",
    choices: [
      "text-shadow: 2px 2px 5px gray;",
      "box-shadow: 2px 2px 5px gray;",
      "shadow: 2px 2px 5px gray;",
      "font-shadow: 2px 2px 5px gray;"
    ],
    answer: "text-shadow: 2px 2px 5px gray;"
  },
  {
    question: "Quel est le langage principal pour la programmation front-end ?",
    choices: [
      "Python",
      "Java",
      "JavaScript",
      "C#"
    ],
    answer: "JavaScript"
  },
  {
    question: "Comment déclarer une variable en JavaScript ?",
    choices: [
      "let x;",
      "int x;",
      "var x;",
      "define x;"
    ],
    answer: "let x;"
  },
  {
    question: "Quel est l'opérateur pour additionner deux nombres en JavaScript ?",
    choices: [
      "+",
      "-",
      "*",
      "/"
    ],
    answer: "+"
  },
  {
    question: "Comment ajouter un élément à un tableau en JavaScript ?",
    choices: [
      "array.push(element);",
      "array.add(element);",
      "array.append(element);",
      "array.insert(element);"
    ],
    answer: "array.push(element);"
  },
  {
    question: "Quel est le type de données d'une valeur comme \"Hello World\" en JavaScript ?",
    choices: [
      "String",
      "Number",
      "Boolean",
      "Object"
    ],
    answer: "String"
  },
  {
    question: "Comment accéder au premier élément d'un tableau en JavaScript ?",
    choices: [
      "array[0]",
      "array[1]",
      "array.first()",
      "array.get(0)"
    ],
    answer: "array[0]"
  },
  {
    question: "Que fait `console.log()` en JavaScript ?",
    choices: [
      "Affiche un message dans la console",
      "Crée une alerte dans le navigateur",
      "Écrit du texte dans le HTML",
      "Modifie une variable"
    ],
    answer: "Affiche un message dans la console"
  },
  {
    question: "Quelle méthode JavaScript est utilisée pour trier un tableau ?",
    choices: [
      "array.sort()",
      "array.order()",
      "array.arrange()",
      "array.organize()"
    ],
    answer: "array.sort()"
  },
  {
    question: "Comment créer une fonction en JavaScript ?",
    choices: [
      "function myFunction() {}",
      "func myFunction() {}",
      "create myFunction() {}",
      "define myFunction() {}"
    ],
    answer: "function myFunction() {}"
  },
  {
    question: "Quel est le mot-clé pour créer une constante en JavaScript ?",
    choices: [
      "const",
      "let",
      "var",
      "final"
    ],
    answer: "const"
  },
  {
    question: "Comment déclarer une fonction anonyme en JavaScript ?",
    choices: [
      "const myFunc = function() {};",
      "function myFunc() {};",
      "let myFunc = function() {};",
      "var myFunc() = function {};"
    ],
    answer: "const myFunc = function() {};",
  },
  {
    question: "Quel est le protocole principal utilisé pour envoyer des données entre un client et un serveur ?",
    choices: [
      "HTTP",
      "FTP",
      "SMTP",
      "POP3"
    ],
    answer: "HTTP"
  },
  {
    question: "Quel est l'acronyme de REST dans les services Web ?",
    choices: [
      "Representational State Transfer",
      "Remote Event Service Transfer",
      "Regular Server Time",
      "Resourceful State Transfer"
    ],
    answer: "Representational State Transfer"
  },
  {
    question: "Dans une application Node.js, quelle fonction est utilisée pour démarrer le serveur ?",
    choices: [
      "http.createServer()",
      "server.start()",
      "node.run()",
      "create.server()"
    ],
    answer: "http.createServer()"
  },
  {
    question: "Quelle méthode HTTP est utilisée pour récupérer des données depuis un serveur ?",
    choices: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    answer: "GET"
  },
  {
    question: "Quel est le format standard pour envoyer des données structurées via une API Web ?",
    choices: [
      "JSON",
      "XML",
      "CSV",
      "YAML"
    ],
    answer: "JSON"
  },
  {
    question: "Comment importer une bibliothèque en JavaScript avec ES6 ?",
    choices: [
      "import { library } from 'module';",
      "require('module');",
      "include 'module';",
      "import library from 'module';"
    ],
    answer: "import { library } from 'module';"
  },
  {
    question: "Quel type de données est retourné par `JSON.stringify()` ?",
    choices: [
      "String",
      "Object",
      "Array",
      "Boolean"
    ],
    answer: "String"
  },
  {
    question: "Quel attribut dans HTML est utilisé pour spécifier une image de fond ?",
    choices: [
      "background-image",
      "src",
      "image",
      "background-src"
    ],
    answer: "background-image"
  },
  {
    question: "Quel framework JavaScript est utilisé pour créer des applications web interactives ?",
    choices: [
      "React",
      "Angular",
      "Vue.js",
      "All of the above"
    ],
    answer: "All of the above"
  },
  
  {
    question: "Quel attribut HTML est utilisé pour spécifier un identifiant unique pour un élément ?",
    choices: [
      "id",
      "class",
      "name",
      "value"
    ],
    answer: "id"
  },
  {
    question: "Quel est l'élément HTML utilisé pour définir une section de navigation ?",
    choices: [
      "<nav>",
      "<header>",
      "<footer>",
      "<section>"
    ],
    answer: "<nav>"
  },
  {
    question: "Quel est le but de l'attribut 'alt' dans la balise <img> ?",
    choices: [
      "Fournir une description textuelle de l'image",
      "Changer la couleur de l'image",
      "Définir la taille de l'image",
      "Spécifier l'URL de l'image"
    ],
    answer: "Fournir une description textuelle de l'image"
  },
  {
    question: "Comment centrer du texte en CSS ?",
    choices: [
      "text-align: center;",
      "align: center;",
      "margin: auto;",
      "display: center;"
    ],
    answer: "text-align: center;"
  },
  {
    question: "Quelle est la différence entre 'class' et 'id' en HTML ?",
    choices: [
      "Un 'id' est unique, une 'class' peut être utilisée plusieurs fois",
      "'class' est unique, 'id' peut être utilisé plusieurs fois",
      "Ils sont équivalents",
      "'id' est utilisé pour les formulaires, 'class' pour les images"
    ],
    answer: "Un 'id' est unique, une 'class' peut être utilisée plusieurs fois"
  },
  {
    question: "Quel est le but de la méthode 'getElementById()' en JavaScript ?",
    choices: [
      "Sélectionner un élément par son ID",
      "Ajouter un ID à un élément",
      "Modifier le contenu d'un élément",
      "Supprimer un élément"
    ],
    answer: "Sélectionner un élément par son ID"
  },
  {
    question: "Quel est le but de la méthode 'querySelector()' en JavaScript ?",
    choices: [
      "Sélectionner un élément avec un sélecteur CSS",
      "Créer un nouvel élément HTML",
      "Ajouter un événement à un élément",
      "Supprimer un élément du DOM"
    ],
    answer: "Sélectionner un élément avec un sélecteur CSS"
  },
  {
    question: "Quel est l'opérateur JavaScript pour vérifier l'égalité sans type coercitif ?",
    choices: [
      "==",
      "===",
      "!=",
      "!=="
    ],
    answer: "==="
  },
  {
    question: "Quelle méthode permet d'ajouter un nouvel élément au début d'un tableau en JavaScript ?",
    choices: [
      "array.unshift(element);",
      "array.push(element);",
      "array.add(element);",
      "array.insert(element);"
    ],
    answer: "array.unshift(element);"
  },
  {
    question: "Comment vérifier si un élément existe dans un tableau en JavaScript ?",
    choices: [
      "array.contains(element);",
      "array.includes(element);",
      "array.indexOf(element) !== -1;",
      "array.find(element);"
    ],
    answer: "array.includes(element);"
  },
  {
    question: "Quel attribut HTML permet de spécifier l'adresse d'un fichier lié ?",
    choices: [
      "src",
      "href",
      "link",
      "rel"
    ],
    answer: "href"
  },
  {
    question: "Quelle propriété CSS est utilisée pour définir l'espace entre les éléments d'un flex container ?",
    choices: [
      "justify-content",
      "align-items",
      "gap",
      "margin"
    ],
    answer: "gap"
  },
  {
    question: "Quel est le rôle de la méthode 'addEventListener()' en JavaScript ?",
    choices: [
      "Ajouter un événement à un élément",
      "Supprimer un événement d'un élément",
      "Empêcher la propagation d'un événement",
      "Créer un événement personnalisé"
    ],
    answer: "Ajouter un événement à un élément"
  },
  {
    question: "Quel est le rôle de la méthode 'preventDefault()' en JavaScript ?",
    choices: [
      "Empêcher l'exécution de l'action par défaut",
      "Prévenir les erreurs d'exécution",
      "Définir une valeur par défaut pour un champ de formulaire",
      "Annuler l'événement"
    ],
    answer: "Empêcher l'exécution de l'action par défaut"
  },
  {
    question: "Quel est l'effet de 'position: absolute;' en CSS ?",
    choices: [
      "L'élément est positionné par rapport à son conteneur le plus proche avec 'position: relative;'",
      "L'élément est positionné par rapport à la fenêtre du navigateur",
      "L'élément est positionné par rapport au document entier",
      "L'élément est flottant"
    ],
    answer: "L'élément est positionné par rapport à son conteneur le plus proche avec 'position: relative;'"
  },
  {
    question: "Comment accéder à la valeur d'un champ de texte en JavaScript ?",
    choices: [
      "document.getElementById('id').value",
      "document.getElementById('id').innerHTML",
      "document.getElementById('id').textContent",
      "document.getElementById('id').textValue"
    ],
    answer: "document.getElementById('id').value"
  },
  {
    question: "Qu'est-ce que le DOM en JavaScript ?",
    choices: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
      "Document Online Management"
    ],
    answer: "Document Object Model"
  },
  {
    question: "Quelle méthode JavaScript permet de convertir une chaîne JSON en objet JavaScript ?",
    choices: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.objectify()"
    ],
    answer: "JSON.parse()"
  },
  {
    question: "Quel est l'acronyme de 'CSS' ?",
    choices: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Common Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Quel est l'élément HTML utilisé pour créer un formulaire ?",
    choices: [
      "<form>",
      "<input>",
      "<textarea>",
      "<button>"
    ],
    answer: "<form>"
  },
  {
    question: "Comment ajouter une option dans une liste déroulante en HTML ?",
    choices: [
      "<option>",
      "<select>",
      "<input>",
      "<list>"
    ],
    answer: "<option>"
  },
  {
    question: "Comment spécifier une largeur maximale pour un élément en CSS ?",
    choices: [
      "max-width",
      "width-max",
      "width-limit",
      "limit-width"
    ],
    answer: "max-width"
  },
  {
    question: "Quel est le rôle de la propriété 'flex' en CSS ?",
    choices: [
      "Définir la taille d'un élément dans un flex container",
      "Positionner un élément dans un flex container",
      "Masquer un élément dans un flex container",
      "Créer un élément flex dans le document"
    ],
    answer: "Définir la taille d'un élément dans un flex container"
  },
  {
    question: "Comment définir une animation CSS ?",
    choices: [
      "@keyframes",
      "animation-keyframes",
      "animation-name",
      "keyframes-name"
    ],
    answer: "@keyframes"
  },


  {
    question: "Quel est le but principal de l'API Fetch en JavaScript ?",
    choices: [
      "Effectuer des requêtes HTTP",
      "Manipuler des données locales",
      "Créer des interfaces utilisateur",
      "Gérer des événements utilisateur"
    ],
    answer: "Effectuer des requêtes HTTP"
  }
];




  let current = 0;
  let score = 0;
  let nomComplet = "";

  function demarrerJeu() {
    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();

    if (!prenom || !nom) {
      alert("Merci de remplir les deux champs.");
      return;
    }

    nomComplet = `${prenom} ${nom}`;
    document.getElementById("nomUtilisateur").textContent = `👤 Bienvenue ${nomComplet}`;
    document.getElementById("message").textContent = `${prenom}, es-tu prêt(e) à commencer ?`;

    document.getElementById("startModal").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";

    setTimeout(showQuestion, 2000); // Attendre un peu avant la 1ère question
  }

  function showQuestion() {
    const q = questions[current];
    document.getElementById("message").textContent = "";
    document.getElementById("question").textContent = q.question;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.onclick = () => checkAnswer(btn, choice);
      answersDiv.appendChild(btn);
    });
  }

  function checkAnswer(button, selected) {
    const correct = questions[current].answer;
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correct) {
      score++;
      button.style.backgroundColor = "#28a745";
    } else {
      button.style.backgroundColor = "#dc3545";
      buttons.forEach(btn => {
        if (btn.textContent === correct) {
          btn.style.backgroundColor = "#28a745";
        }
      });
    }

    document.getElementById("score").textContent = `Score : ${score}/${questions.length}`;

    setTimeout(() => {
      current++;
      if (current < questions.length) {
        showQuestion();
      } else {
        document.getElementById("question").textContent = "🎉 Quiz terminé !";
        document.getElementById("answers").innerHTML = "";
      }
    }, 1000);
  }
