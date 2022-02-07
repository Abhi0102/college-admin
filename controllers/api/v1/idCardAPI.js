var PdfPrinter = require("pdfmake");
var fs = require("fs");
var StudentData = require("../../../models/studentForm");

function getSingleCard(student) {
  return {
    unbreakable: true,
    style: "tableMargin",
    table: {
      widths: [35, 1, 0.5, 35, 25, 0.5, 38, 15, 15, 1],
      heights: [1, 8, 10, 8, 8, 8, 8, 8, 8, 8, 20, 3],
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
            text: getLogo(),
            border: getLeftSide(),
          },
          {
            text: getUnivName(),
            colSpan: 9,
            style: "headerFirst",
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
            text: getCollegeName(),
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
            text: student.appNo,
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
            text: getCurrSession(),
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
            text: student.studentName,
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
            text: student.fatherName,
            style: "highlight",
            colSpan: 4,
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
            text: student.receiptNo,
            border: getMidCell(),
            style: "highlight",
          },
          {
            text: "Mobile",

            border: getMidCell(),
          },
          { text: ":", border: getMidCell() },
          {
            text: student.mobileNumber,
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
          {
            text: student.studentClass,
            border: getMidCell(),
            style: "highlight",
          },
          { text: "DOB", border: getMidCell() },
          { text: ":", border: getMidCell() },
          {
            text: student.dateOfBirth.toLocaleDateString(),
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
            text: student.createdAt.toLocaleDateString(),
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
            text: student.subjects,
            colSpan: 3,
            border: getMidCell(),
          },
          { text: "", border: getMidCell() },
          { text: "", border: getMidCell() },
          { text: "", border: getMidCell() },
          { text: getPrincipalSign(), colSpan: 2, border: getMidCell() },
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
            text: student.permanentAddress,
            colSpan: 4,
            border: getMidCell(),
          },
          { text: "", border: getMidCell() },
          { text: "", border: getMidCell() },
          { text: "", border: getMidCell() },
          {
            text: "(Principal Sign)",
            border: getMidCell(),
            colSpan: 2,
            style: "small",
          },
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
  };
}

function getCurrSession() {
  return "2021-22";
}

function getPrincipalSign() {
  return "";
}

function getUnivName() {
  return "Sri Dev Suman Uttarakhand Vishwavidhalaya";
}

function getLogo() {
  return "Logo";
}

function getCollegeName() {
  return "Govt. Degree College Bhupatwala, Haridwar";
}

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

async function getColumns(ids) {
  // console.log(ids);
  let pos = 0;
  let li = [[], []];
  for (let i in ids) {
    const student = await StudentData.findById(ids[i]);
    const card = getSingleCard(student);
    // console.log(i);
    li[pos] = [...li[pos], card];
    if (pos === 0) {
      pos = 1;
    } else {
      pos = 0;
    }
  }

  return li;
}

module.exports.pdfCreate = async function (req, res) {
  try {
    const reqData = req.body;
    let li = [];
    for (let i in reqData) {
      li = [...li, reqData[i]];
    }

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
        columns: await getColumns(li),
        columnGap: 15,
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
        small: {
          fontSize: 6,
        },
        tableMargin: {
          margin: [2, 10, 0, 0],
        },
      },

      defaultStyle: { font: "Times", fontSize: 7 },
    };

    var pdfDoc = printer.createPdfKitDocument(docDefinition);

    pdfDoc.pipe(fs.createWriteStream(__dirname + "/document.pdf"));

    console.log(__dirname);
    pdfDoc.end();
    // res.sendFile(__dirname + "document.pdf");
    console.log("Done");
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    return res.status(422).json({
      data: {
        success: false,
        error: err,
      },
    });
  }
};

module.exports.getPdf = (req, res) => {
  res.sendFile(`${__dirname}/document.pdf`);
};
