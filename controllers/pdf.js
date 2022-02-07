var PdfPrinter = require("pdfmake");
var fs = require("fs");

// function getSingleCard(){
//     {

//     }

// }

module.exports.pdfCreate = function (req, res) {
  var fonts = {
    Courier: {
      normal: "Courier",
      bold: "Courier-Bold",
      italics: "Courier-Oblique",
      bolditalics: "Courier-BoldOblique",
    },
    Helvetica: {
      normal: "Helvetica",
      bold: "Helvetica-Bold",
      italics: "Helvetica-Oblique",
      bolditalics: "Helvetica-BoldOblique",
    },
    Times: {
      normal: "Times-Roman",
      bold: "Times-Bold",
      italics: "Times-Italic",
      bolditalics: "Times-BoldItalic",
    },
    Symbol: {
      normal: "Symbol",
    },
    ZapfDingbats: {
      normal: "ZapfDingbats",
    },
  };

  var printer = new PdfPrinter(fonts);
  var docDefinition = {
    content: {
      columns: [
        [
          {
            table: {
              widths: [35, 1, 0.5, 35, 25, 0.5, 38, 15, 15, 1],
              heights: [1, 8, 10, 8, 8, 8, 8, 8, 8, 8, 8, 3],
              body: [
                [
                  { text: "", colSpan: 10, border: [true, true, true, false] },
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ],
                [
                  {
                    rowSpan: 2,
                    text: "Logo",
                    border: getLeftSide(),
                  },
                  {
                    text: "Sri Dev Suman Uttarakhand Vishwavidhalaya",
                    colSpan: 9,
                    style: "headerFirst",
                    // fillColor: "#780101",
                    // color: "white",
                    border: getRightSide(),
                  },
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ],
                [
                  "",
                  {
                    text: "Pt. Lalit Mohan Sharma Campus Rishikesh",
                    // fillColor: "#780101",
                    // color: "white",
                    style: "headerFirst",
                    colSpan: 9,
                    border: getRightSide(),
                  },
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                  "",
                ],
                [
                  { text: "Reg. No.", colSpan: 2, border: getLeftSide() },
                  "",
                  { text: ":", border: [false, false, false, false] },
                  {
                    text: "R2100267",
                    border: getMidCell(),
                    style: "highlight",
                  },
                  { text: "", border: getMidCell() },
                  {
                    text: "IDENTITY CARD",
                    colSpan: 3,
                    border: getMidCell(),
                    style: "highlight",
                  },
                  { text: "", border: getMidCell() },
                  "",
                  {
                    text: "2021-22",
                    colSpan: 2,
                    border: getRightSide(),
                    style: "highlight",
                  },
                  "",
                ],
                [
                  { text: "Name", colSpan: 2, border: getLeftSide() },
                  "",
                  { text: ":", border: getMidCell() },
                  {
                    text: "Aakash Pokhriyal",
                    style: "highlight",
                    colSpan: 2,
                    border: getMidCell(),
                  },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "Photo", colSpan: 2, rowSpan: 4 },
                  "",
                  { text: "", border: getRightSide() },
                ],
                [
                  {
                    text: "Father's Name",
                    border: getLeftSide(),
                    colSpan: 2,
                  },
                  "",
                  { text: ":", border: getMidCell() },
                  {
                    text: "Rakesh Pokhriyal",
                    style: "highlight",
                    colSpan: 2,
                    border: getMidCell(),
                  },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getRightSide() },
                ],
                [
                  { text: "Receipt No.", border: getLeftSide(), colSpan: 2 },
                  "",
                  { text: ":", border: getMidCell() },
                  {
                    text: "2122-00267",
                    border: getMidCell(),
                    style: "highlight",
                  },
                  {
                    text: "Mobile",

                    border: getMidCell(),
                  },
                  { text: ":", border: getMidCell() },
                  {
                    text: "8384879498",
                    border: getMidCell(),
                    style: "highlight",
                  },
                  "",
                  "",
                  { text: "", border: getRightSide() },
                ],
                [
                  { text: "Class", border: getLeftSide(), colSpan: 2 },
                  "",
                  { text: ":", border: getMidCell() },
                  { text: "BA I", border: getMidCell(), style: "highlight" },
                  { text: "DOB", border: getMidCell() },
                  { text: ":", border: getMidCell() },
                  {
                    text: "26-Feb-2004",
                    border: getMidCell(),
                    style: "highlight",
                  },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getRightSide() },
                ],
                [
                  { text: "Adm. Date", border: getLeftSide(), colSpan: 2 },
                  "",
                  { text: ":", border: getMidCell() },

                  {
                    text: "14-Sep-2021",
                    colSpan: 2,
                    style: "highlight",
                    border: getMidCell(),
                  },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getRightSide() },
                ],
                [
                  { text: "Subject", border: getLeftSide(), colSpan: 2 },
                  "",
                  { text: ":", border: getMidCell() },

                  {
                    text: "History, Sociology, Political Science",
                    colSpan: 3,
                    border: getMidCell(),
                  },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getRightSide() },
                ],
                [
                  {
                    text: "Address",
                    border: getLeftSide(),
                    colSpan: 2,
                  },
                  "",
                  { text: ":", border: getMidCell() },

                  {
                    text: "TEHRI FARM GOHARI MAFI RAIWALA",
                    colSpan: 3,
                    border: getMidCell(),
                  },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getMidCell() },
                  { text: "", border: getRightSide() },
                ],
                [
                  { text: "", border: getBottomLeftCorner() },
                  { text: "", border: getBottomSide() },
                  { text: "", border: getBottomSide() },
                  { text: "", border: getBottomSide() },
                  { text: "", border: getBottomSide() },
                  { text: "", border: getBottomSide() },
                  { text: "", border: getBottomSide() },
                  { text: "", border: getBottomSide() },
                  { text: "", border: getBottomSide() },
                  { text: "", border: getBottomRightCorner() },
                ],
              ],
            },
          },
        ],
      ],
    },
    styles: {
      headerFirst: {
        fontSize: 8,
        fillColor: "#800000",
        bold: true,
        color: "white",
        alignment: "center",
      },
      highlight: {
        bold: true,
      },
    },

    defaultStyle: { font: "Times", fontSize: 7 },
  };

  function getLeftSide() {
    // return [true, true, true, true];
    return [true, false, false, false];
  }
  function getBottomLeftCorner() {
    // return [true, true, true, true];
    return [true, false, false, true];
  }
  function getBottomRightCorner() {
    // return [true, true, true, true];
    return [false, false, true, true];
  }
  function getMidCell() {
    // return [true, true, true, true];
    return [false, false, false, false];
  }
  function getRightSide() {
    // return [true, true, true, true];
    return [false, false, true, false];
  }

  function getBottomSide() {
    // return [true, true, true, true];
    return [false, false, false, true];
  }
  //   var docDefinition = {
  //     content: {
  //       columns: [
  //         [
  //           {
  //             // layout: "lightHorizontalLines", // optional
  //             table: {
  //               // headers are automatically repeated if the table spans over multiple pages
  //               // you can declare how many rows should be treated as headers
  //               headerRows: 1,
  //               width: 85,

  //               body: [
  //                 ["", "Sri Dev Suman Uttarakhand Vishwavidhalaya", ""],
  //                 // ["Value 1", "Value 2", "Value 3", "Value 4"],
  //                 // [{ text: "Bold value", bold: true }, "Val 2", "Val 3", "Val 4"],
  //               ],
  //             },
  //           },
  //           {
  //             width: "50%",
  //             text: "Second Id Card",
  //           },
  //         ],
  //         [
  //           {
  //             width: "50%",
  //             text: "Third Id Card",
  //           },
  //         ],
  //       ],
  //       columnGap: 10,
  //     },
  //     defaultStyle: {
  //       font: "Helvetica",
  //       margin: [0, 5, 0, 15],
  //     },
  //   };

  var pdfDoc = printer.createPdfKitDocument(docDefinition);
  pdfDoc.pipe(fs.createWriteStream("document.pdf"));
  pdfDoc.end();
  console.log("Done");
  res.status(200).json({
    success: true,
  });
};
