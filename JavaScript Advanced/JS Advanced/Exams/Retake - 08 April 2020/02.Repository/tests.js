let { Repository } = require("./solution.js");
let { expect, assert } = require('chai');

describe("Repository", function () {

    describe("validate", function () {

        let props = {
            name: "string",
            age: "number",
            birthday: "object"
        };

        it("valid properties", function () {
            expect(props).to.haveOwnPropertyDescriptor('name');
            expect(props).to.haveOwnProperty('age');
            expect(props).to.haveOwnProperty('birthday');
        });

        it('invalid properties must throw error', () => {
            let repo = new Repository(props);

            entity = {
                name: "Vlado",
                age: 31,
                date: new Date(1990, 7, 21)
            };

            expect(() => repo._validate(entity)).to.throw(Error, 'Property birthday is missing from the entity!')
        });

        it('invalid property type must throw error', () => {
            let repo = new Repository(props);

            entity = {
                name: "Vlado",
                age: '31',
                birthday: new Date(1990, 7, 21)
            };

            expect(() => repo._validate(entity)).to.throw(Error, 'Property age is not of correct type!')
        });

        /* it('birthday property not correct type', () =>{
             entity = {
                 name: "Vlado",
                 age: 31,
                 birthday: new Date(1990, 0, 21)
             };
             expect(() => repo._validate(entity)).to.throw(Error, 'Property age is not of correct type!') 
         });
         */
    });

    describe('ID', () => {
        it('next ID working as expected', () => {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            entity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };

            let repo = new Repository(props);
            repo.add(entity);
            expect(repo.nextId()).to.equals(1);
        })

        it('getID working as expected', () => {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            entity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };

            let repo = new Repository(props);
            repo.add(entity);
            expect(repo.getId(0)).to.equals(entity);
        });

        it('getID throws error if invalid ID', () => {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            entity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };

            let repo = new Repository(props);
            repo.add(entity);
            expect(() => repo.getId(1)).to.throw(Error, 'Entity with id: 1 does not exist!');
        });
    });

    describe('count', () => {
        it('working as expected', () => {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            entity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };

            let repo = new Repository(props);
            repo.add(entity);

            expect(repo.count).to.equals(1);
        });
    });

    describe('add', () => {


        it('add returns correct ID, as expected', () => {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            entity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };
            let repo = new Repository(props);
            expect(repo.add(entity)).to.equal(0);
            expect(repo.getId(0)).to.deep.equal(entity);
        });

    });

    describe('update', () => {
        it('throws error if ID is not valid', () => {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            entity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };

            let newEntity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };

            let repo = new Repository(props);
            repo.add(entity);

            expect(() => repo.update(1, newEntity)).to.throw(Error, 'Entity with id: 1 does not exist!')
        });

        it('updates entity as expected', () => {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            entity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };

            let newEntity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };

            let repo = new Repository(props);
            repo.add(entity);
            repo.update(0, newEntity);
            expect(repo.getId(0)).to.deep.equal(newEntity);
        });
    });

    describe('delete', () => {
        it('throws error if ID is not valid', () => {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            entity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };

            let repo = new Repository(props);
            repo.add(entity);

            expect(() => repo.del(1)).to.throw(Error, 'Entity with id: 1 does not exist!')
        });

        it('deletes entity as expected', () => {
            let props = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            entity = {
                name: "Vlado",
                age: 31,
                birthday: new Date(1990, 7, 21)
            };

            let repo = new Repository(props);
            repo.add(entity);
            repo.del(0);

            expect(repo.count).to.equals(0);
            expect(() => repo.getId(0)).to.throw(Error);
        });
    });

});