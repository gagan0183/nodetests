var gradeBook = {
    //internal object _grades
    _grades: [],
    addGrade: function(newGrade) {
        this._grades.push(newGrade);
    },
    getCountOfGrades: function() {
        return this._grades.length;
    },
    getAverage: function() {
        var sum = 0;
        for(var i = 0; i < this._grades.length; i++) {
            sum += this._grades[i];            
        }
        return sum/this._grades.length;
    },
    getLetterGrade: function() {
        var average = this.getAverage();
        var lettergrade;
        if(average >= 90) {
            lettergrade = "A";
        }
        else if(average >= 80 && average < 90) {
            lettergrade = "B";
        }
        else if(average >= 70 && average < 80) {
            lettergrade = "C";
        }
        else if(average >= 60 && average < 70) {
            lettergrade = "D";
        }
        else if(average < 60) {
            lettergrade = "F";
        }
        return lettergrade;
    },
    reset: function() {
        this._grades = [];
    }
};

exports.book = gradeBook;