// git config --global user.email "test@gmail"
// git config --global user.name "TestName"
// git init
// git add .
// git commit -m "Init"
// git push

 const files = ["cat.jpg", "dog.png", "doc.docx", "Virus.exe", "document.pdf"];
 for (const file of files) {
    if (file === "cat.jpg") {
        console.log("Пропускаем данную картинку");
        continue;
    }

    if (file === "Virus.exe") {
        console.log("АЛАРМ! Вирус найден!");
        break;
    }

    console.log("Файл проверен: " + file);
 }

//  files.push("music.mp3");

// for (const file of files) {
//     console.log(file);
// }

//  let fuel = 100; // топливо

//  while (fuel > 0) {
//      console.log("Едем " + "Топливо осталось: " + fuel);
//     fuel -= 10; // fuel = fuel - 10;
//   }

//  console.log("Приехали");

// for (СТАРТ; ФИНИШ; ШАГ);

// for (let i = 0; i < files.length; i++) {
//     console.log(files[i]);
// }

