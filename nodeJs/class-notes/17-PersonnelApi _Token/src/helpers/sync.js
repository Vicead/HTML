"use strict";

const { mongoose } = require('../configs/dbConnection');
const Department = require('../models/department.model');
const Personnel = require('../models/personnel.model');

module.exports = async function() {
    try {
        await mongoose.connection.dropDatabase();
        console.log('- Database and all data DELETED!');

        const departments = [
            "FullStack Department",
            "DevOps Department",
            "CyberSec Department",
        ];

        for (const departmentName of departments) {
            const department = await Department.create({ name: departmentName });
            console.log(`- Department '${department.name}' Added.`);

            for (let i = 0; i < 10; i++) {
                await Personnel.create({
                    departmentId: department._id,
                    username: `test${departmentName[0]}${i}`,
                    password: "1234",
                    firstName: "firstName",
                    lastName: "lastName",
                    phone: "123456789",
                    email: `test${departmentName[0]}${i}@site.com`,
                    title: "title",
                    salary: 2500,
                    description: "description",
                    isActive: true,
                    isAdmin: false,
                    isLead: false,
                    startedAt: "2023-10-15 13:14:15"
                });
            }
            console.log(`- 10 Personnels Added for Department '${department.name}'.`);
        }
    } catch (error) {
        console.error("Error occurred:", error);
    }
};