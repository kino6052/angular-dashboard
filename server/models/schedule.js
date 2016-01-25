'use strict';
module.exports = function(sequelize, DataTypes) {
    var schedule = sequelize.define('schedule', {
        AppointmentReason: DataTypes.STRING,
        ConfirmationStatus: DataTypes.STRING,
        CreatedDate: DataTypes.DATE,
        KareoID: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        PatientFullName: DataTypes.STRING,
        PatientID: DataTypes.STRING,
        PracticeID: DataTypes.INTEGER,
        ServiceLocationName: DataTypes.STRING,
        StartDate: DataTypes.DATE
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return schedule;
};