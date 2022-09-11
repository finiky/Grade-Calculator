import { getLetterGrade } from "./utils";
const gradeScale = [
  { level: "Level 5", grade: "A+", min_mark: 90, max_mark: 100 },
  { level: "Level 5", grade: "A", min_mark: 85, max_mark: 89 },
  { level: "Level 5", grade: "A-", min_mark: 80, max_mark: 84 },
  { level: "Level 5", grade: "B+", min_mark: 75, max_mark: 79 },
  { level: "Level 5", grade: "B", min_mark: 70, max_mark: 74 },
  { level: "Level 5", grade: "B-", min_mark: 65, max_mark: 69 },
  { level: "Level 5", grade: "C+", min_mark: 60, max_mark: 64 },
  { level: "Level 5", grade: "C", min_mark: 55, max_mark: 59 },
  { level: "Level 5", grade: "C-", min_mark: 50, max_mark: 54 },
  { level: "Level 5", grade: "D", min_mark: 40, max_mark: 49 },
  { level: "Level 5", grade: "E", min_mark: 0, max_mark: 39 },
  { level: "Level 6", grade: "A+", min_mark: 92, max_mark: 100 },
  { level: "Level 6", grade: "A", min_mark: 85, max_mark: 91 },
  { level: "Level 6", grade: "A-", min_mark: 80, max_mark: 84 },
  { level: "Level 6", grade: "B+", min_mark: 75, max_mark: 79 },
  { level: "Level 6", grade: "B", min_mark: 70, max_mark: 74 },
  { level: "Level 6", grade: "B-", min_mark: 65, max_mark: 69 },
  { level: "Level 6", grade: "C+", min_mark: 60, max_mark: 64 },
  { level: "Level 6", grade: "C", min_mark: 55, max_mark: 59 },
  { level: "Level 6", grade: "C-", min_mark: 50, max_mark: 54 },
  { level: "Level 6", grade: "D", min_mark: 40, max_mark: 49 },
  { level: "Level 6", grade: "E", min_mark: 0, max_mark: 39 },
];
const outOfRangeMarks = 1000;
describe("getLetterGrade", () => {
  test.concurrent.each`
  gradeScale    | mark                       | level                   | expected
  ${gradeScale} | ${gradeScale[0].min_mark}  | ${gradeScale[0].level}  | ${gradeScale[0].grade} 
  ${gradeScale} | ${gradeScale[1].min_mark}  | ${gradeScale[1].level}  | ${gradeScale[1].grade}
  ${gradeScale} | ${gradeScale[2].min_mark}  | ${gradeScale[2].level}  | ${gradeScale[2].grade}
  ${gradeScale} | ${gradeScale[3].min_mark}  | ${gradeScale[3].level}  | ${gradeScale[3].grade}
  ${gradeScale} | ${gradeScale[4].min_mark}  | ${gradeScale[4].level}  | ${gradeScale[4].grade}
  ${gradeScale} | ${gradeScale[5].min_mark}  | ${gradeScale[5].level}  | ${gradeScale[5].grade}
  ${gradeScale} | ${gradeScale[6].min_mark}  | ${gradeScale[6].level}  | ${gradeScale[6].grade}
  ${gradeScale} | ${gradeScale[7].min_mark}  | ${gradeScale[7].level}  | ${gradeScale[7].grade}
  ${gradeScale} | ${gradeScale[8].min_mark}  | ${gradeScale[8].level}  | ${gradeScale[8].grade}
  ${gradeScale} | ${gradeScale[9].min_mark}  | ${gradeScale[9].level}  | ${gradeScale[9].grade}
  ${gradeScale} | ${gradeScale[10].min_mark} | ${gradeScale[10].level} | ${gradeScale[10].grade}
  ${gradeScale} | ${gradeScale[11].min_mark} | ${gradeScale[11].level} | ${gradeScale[11].grade}
  ${gradeScale} | ${gradeScale[12].min_mark} | ${gradeScale[12].level} | ${gradeScale[12].grade}
  ${gradeScale} | ${gradeScale[13].min_mark} | ${gradeScale[13].level} | ${gradeScale[13].grade}
  ${gradeScale} | ${gradeScale[14].min_mark} | ${gradeScale[14].level} | ${gradeScale[14].grade}
  ${gradeScale} | ${gradeScale[15].min_mark} | ${gradeScale[15].level} | ${gradeScale[15].grade}
  ${gradeScale} | ${gradeScale[16].min_mark} | ${gradeScale[16].level} | ${gradeScale[16].grade}
  ${gradeScale} | ${gradeScale[17].min_mark} | ${gradeScale[17].level} | ${gradeScale[17].grade}
  ${gradeScale} | ${gradeScale[18].min_mark} | ${gradeScale[18].level} | ${gradeScale[18].grade}
  ${gradeScale} | ${gradeScale[19].min_mark} | ${gradeScale[19].level} | ${gradeScale[19].grade}
  ${gradeScale} | ${gradeScale[20].min_mark} | ${gradeScale[20].level} | ${gradeScale[20].grade}
  ${gradeScale} | ${gradeScale[21].min_mark} | ${gradeScale[21].level} | ${gradeScale[21].grade}
  `(
    "returns a letter grade when mark, level and gradeScale data is provided",
    ({ gradeScale, mark, level, expected }) => {
      expect(getLetterGrade(gradeScale, mark, level)).toEqual(expected);
    }
  );

  test("getLetterGrade returns a string type result on passing the correct data to it", () => {
    expect(
      typeof getLetterGrade(
        gradeScale,
        gradeScale[0].min_mark,
        gradeScale[0].level
      )
    ).toBe("string");
  });
  test("when invalid mark parameter is passed", () => {
    expect(() =>
      getLetterGrade(gradeScale, outOfRangeMarks, gradeScale[0].level)
    ).toThrow("Marks are out of range.");
  });

  test("Throws an error for invalid gradeScale", () => {
    const corruptGradeScale = {};
    const mark = 70;
    const level = "Level 5";
    expect(() => getLetterGrade(corruptGradeScale, mark, level)).toThrow(
      "Grade scale not provided."
    );
  });
});
