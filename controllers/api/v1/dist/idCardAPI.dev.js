"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
      body: [[{
        text: "",
        colSpan: 10,
        border: [true, true, true, false]
      }, "", "", "", "", "", "", "", "", ""], [{
        rowSpan: 2,
        text: getLogo(),
        border: getLeftSide()
      }, {
        text: getUnivName(),
        colSpan: 9,
        style: "headerFirst",
        fillColor: getColor(student.studentClass),
        border: getRightSide()
      }, "", "", "", "", "", "", "", ""], ["", {
        text: getCollegeName(),
        style: "headerFirst",
        fillColor: getColor(student.studentClass),
        colSpan: 9,
        border: getRightSide()
      }, "", "", "", "", "", "", "", ""], [{
        text: "Reg. No.",
        colSpan: 2,
        border: getLeftSide()
      }, "", {
        text: ":",
        border: [false, false, false, false]
      }, {
        text: student.appNo,
        border: getMidCell(),
        style: "highlight"
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "IDENTITY CARD",
        colSpan: 3,
        border: getMidCell(),
        style: "highlight"
      }, {
        text: "",
        border: getMidCell()
      }, "", {
        text: getCurrSession(),
        colSpan: 2,
        border: getRightSide(),
        style: "highlight"
      }, ""], [{
        text: "Name",
        colSpan: 2,
        border: getLeftSide()
      }, "", {
        text: ":",
        border: getMidCell()
      }, {
        text: student.studentName,
        style: "highlight",
        colSpan: 2,
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "Photo",
        colSpan: 2,
        rowSpan: 4
      }, "", {
        text: "",
        border: getRightSide()
      }], [{
        text: "Father's Name",
        border: getLeftSide(),
        colSpan: 2
      }, "", {
        text: ":",
        border: getMidCell()
      }, {
        text: student.fatherName,
        style: "highlight",
        colSpan: 4,
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getRightSide()
      }], [{
        text: "Receipt No.",
        border: getLeftSide(),
        colSpan: 2
      }, "", {
        text: ":",
        border: getMidCell()
      }, {
        text: student.receiptNo,
        border: getMidCell(),
        style: "highlight"
      }, {
        text: "Mobile",
        border: getMidCell()
      }, {
        text: ":",
        border: getMidCell()
      }, {
        text: student.mobileNumber,
        border: getMidCell(),
        style: "highlight"
      }, "", "", {
        text: "",
        border: getRightSide()
      }], [{
        text: "Class",
        border: getLeftSide(),
        colSpan: 2
      }, "", {
        text: ":",
        border: getMidCell()
      }, {
        text: student.studentClass,
        border: getMidCell(),
        style: "highlight"
      }, {
        text: "DOB",
        border: getMidCell()
      }, {
        text: ":",
        border: getMidCell()
      }, {
        text: student.dateOfBirth.toLocaleDateString("en-GB"),
        border: getMidCell(),
        style: "highlight"
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getRightSide()
      }], [{
        text: "Adm. Date",
        border: getLeftSide(),
        colSpan: 2
      }, "", {
        text: ":",
        border: getMidCell()
      }, {
        text: student.admDate ? student.admDate.toLocaleDateString("en-GB") : student.createdAt.toLocaleDateString("en-GB"),
        colSpan: 2,
        style: "highlight",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getRightSide()
      }], [{
        text: "Subject",
        border: getLeftSide(),
        colSpan: 2
      }, "", {
        text: ":",
        border: getMidCell()
      }, {
        text: getSubjects(student.subject1, student.subject2, student.subject3),
        colSpan: 4,
        style: "highlight",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: getPrincipalSign(),
        colSpan: 2,
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getRightSide()
      }], [{
        text: "Address",
        border: getLeftSide(),
        colSpan: 2
      }, "", {
        text: ":",
        border: getMidCell()
      }, {
        text: student.permanentAddress,
        colSpan: 4,
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "(Principal Sign)",
        border: getMidCell(),
        colSpan: 2,
        style: "small"
      }, {
        text: "",
        border: getMidCell()
      }, {
        text: "",
        border: getRightSide()
      }], [{
        text: "",
        border: getBottomLeftCorner()
      }, {
        text: "",
        border: getBottomSide()
      }, {
        text: "",
        border: getBottomSide()
      }, {
        text: "",
        border: getBottomSide()
      }, {
        text: "",
        border: getBottomSide()
      }, {
        text: "",
        border: getBottomSide()
      }, {
        text: "",
        border: getBottomSide()
      }, {
        text: "",
        border: getBottomSide()
      }, {
        text: "",
        border: getBottomSide()
      }, {
        text: "",
        border: getBottomRightCorner()
      }]]
    }
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

function getColumns(ids) {
  var pos, li, i, student, card;
  return regeneratorRuntime.async(function getColumns$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // console.log(ids);
          pos = 0;
          li = [[], []];
          _context.t0 = regeneratorRuntime.keys(ids);

        case 3:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 13;
            break;
          }

          i = _context.t1.value;
          _context.next = 7;
          return regeneratorRuntime.awrap(StudentData.findById(ids[i]));

        case 7:
          student = _context.sent;
          card = getSingleCard(student); // console.log(i);

          li[pos] = [].concat(_toConsumableArray(li[pos]), [card]);

          if (pos === 0) {
            pos = 1;
          } else {
            pos = 0;
          }

          _context.next = 3;
          break;

        case 13:
          return _context.abrupt("return", li);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getSubjects(subject1, subject2, subject3) {
  var subString = (subject1 ? subject1 : "") + ", " + (subject2 ? subject2 : "") + ", " + (subject3 ? subject3 : "");
  subString = subString.replace(/(^[,\s]+)|([,\s]+$)/g, "");
  return subString;
}

function getColor(studentClass) {
  if (studentClass) {
    if (studentClass.startsWith("B.Com.")) {
      return "#168a01";
    } else if (studentClass.startsWith("B.A.")) {
      return "#800000";
    } else if (studentClass.startsWith("B.Sc.")) {
      return "#01638a";
    }
  }

  return "#800000";
}

module.exports.pdfCreate = function _callee(req, res) {
  var reqData, li, i, fonts, printer, docDefinition, pdfDoc;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          reqData = req.body;
          li = [];

          for (i in reqData) {
            li = [].concat(_toConsumableArray(li), [reqData[i]]);
          }

          fonts = {
            Courier: {
              normal: "Courier",
              bold: "Courier-Bold",
              italics: "Courier-Oblique",
              bolditalics: "Courier-BoldOblique"
            },
            Helvetica: {
              normal: "Helvetica",
              bold: "Helvetica-Bold",
              italics: "Helvetica-Oblique",
              bolditalics: "Helvetica-BoldOblique"
            },
            Times: {
              normal: "Times-Roman",
              bold: "Times-Bold",
              italics: "Times-Italic",
              bolditalics: "Times-BoldItalic"
            },
            Symbol: {
              normal: "Symbol"
            },
            ZapfDingbats: {
              normal: "ZapfDingbats"
            }
          };
          printer = new PdfPrinter(fonts);
          _context2.next = 8;
          return regeneratorRuntime.awrap(getColumns(li));

        case 8:
          _context2.t0 = _context2.sent;
          _context2.t1 = {
            columns: _context2.t0,
            columnGap: 15
          };
          _context2.t2 = {
            headerFirst: {
              fontSize: 8,
              // fillColor: getColor(student.studentClass),
              bold: true,
              color: "white",
              alignment: "center"
            },
            highlight: {
              bold: true
            },
            small: {
              fontSize: 6
            },
            tableMargin: {
              margin: [2, 10, 0, 0]
            }
          };
          _context2.t3 = {
            font: "Times",
            fontSize: 7
          };
          docDefinition = {
            content: _context2.t1,
            styles: _context2.t2,
            defaultStyle: _context2.t3
          };
          pdfDoc = printer.createPdfKitDocument(docDefinition);
          pdfDoc.pipe(fs.createWriteStream(__dirname + "/document.pdf"));
          console.log(__dirname);
          pdfDoc.end(); // res.sendFile(__dirname + "document.pdf");
          // console.log("Done");

          res.status(200).json({
            success: true
          });
          _context2.next = 24;
          break;

        case 20:
          _context2.prev = 20;
          _context2.t4 = _context2["catch"](0);
          console.log(_context2.t4);
          return _context2.abrupt("return", res.status(422).json({
            data: {
              success: false,
              error: _context2.t4
            }
          }));

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 20]]);
};

module.exports.getPdf = function (req, res) {
  res.sendFile("".concat(__dirname, "/document.pdf"));
};