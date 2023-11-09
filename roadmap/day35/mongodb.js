/*
    Why MongoDB?
        - MongoDB is a NoSQL database, which means it stores data in JSON-like documents.
        - It is a document-oriented database, which means it stores data in documents instead of tables.
        - It is a non-relational database with dynamic schema.
        - It is easy to scale.
        - It is faster than traditional databases.

    What is document?
        - A record in MongoDB is a document, which is a data structure composed of field and value pairs.
        - MongoDB documents are similar to JSON objects.
        - The values of fields may include other documents, arrays, and arrays of documents.
        - Documents are analogous to structures in programming languages that associate keys with values (e.g. dictionaries, hashes, maps, and associative arrays).
            - dictionaries - Python
            - hashes - Ruby
            - hash maps - Java
            - maps - Java
            - associative arrays - PHP
    
    What is collection?
        - A group of MongoDB documents is called a collection.
        - Collections are analogous to tables in relational databases.
        - Unlike a table, however, a collection does not require its documents to have the same schema.
    
    Mongodb vs MySQL
        - MySQL is a relational database management system (RDBMS) from Oracle that's been around since the 1990's.
        - MongoDB is a NoSQL database program that uses JSON-like documents with optional schemas.
        - MySQL is a relational database, which means it has a table-based data structure with a strict, predefined schema required.
        - MongoDB, on the other hand, is a NoSQL database, which means it's built without a predefined schema.
        - MongoDB is faster than MySQL due to its ability to handle large amounts of unstructured data when compared to MySQL.
*/

/*
    MongoDB:

    create a database called "guvi"
        query: use guvi

    create a collection called "users"
        query: db.createCollection("users")
    
    insert a document into the collection "users"
        query: db.users.insertOne({name: "John", age: 25, city: "New York"})

    insert multiple documents into the collection "users"
        query: db.users.insertMany([{name: "Peter", age: 30, city: "London"}, {name: "Sam", age: 21, city: "Sydney"}])
        
        add more data other than the example given above:

        {name: "John", age: 25, city: "New York"}
        {name: "Peter", age: 30, city: "London"}
        {name: "Sam", age: 21, city: "Sydney"}
    
    find all documents in the collection "users"
        query: db.users.find()
    
    find documents with the name "John" in the collection "users"
        query: db.users.find({name: "John"})
    
    projection:
        query: db.users.find({name: "John"}, {name: 1, _id: 0})
    
    operators:
        - $eq - equal to
        - $gt - greater than
        - $gte - greater than or equal to
        - $lt - less than
        - $lte - less than or equal to
        - $ne - not equal to
        - $in - in
*/

let person = {
    name: 'sathish',
    courses: 5
}

console.log(JSON.stringify(person));

let jsonString = '{"name":"sathish","courses":5}';

console.log(JSON.parse(jsonString));

/*
    basic cursor methods - map, toArray, pretty, forEach, limit, count, sort

    map:
        query: db.users.find().map(function(u) { return u.name; })

        explanation: returns an array of names of all the documents in the collection "users"
    
    toArray:
        query: db.users.find().toArray()

        explanation: returns an array of all the documents in the collection "users"
    
    pretty:
        query: db.users.find().pretty()

        explanation: returns all the documents in the collection "users" in a formatted way
    
    forEach:
        query: db.users.find().forEach(function(u) { print(u.name); })

        explanation: prints the name of all the documents in the collection "users"
    
    limit:
        query: db.users.find().limit(2)

        explanation: returns the first 2 documents in the collection "users"
    
    count:
        query: db.users.find().count()

        explanation: returns the number of documents in the collection "users"
    
    sort:
        query: db.users.find().sort({name: 1})

        explanation: returns all the documents in the collection "users" sorted in ascending order of name
        (change 1 to -1 to sort in descending order)
    
    Aggregation:
        - Aggregation operations process data records and return computed results.
        - Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result.
        - MongoDB provides three ways to perform aggregation: the aggregation pipeline, the map-reduce function, and single purpose aggregation methods.

    group:
        query: db.users.aggregate([{$group: {_id: "$city", count: {$sum: 1}}}])

        explanation: returns the number of documents in the collection "users" grouped by city
    
    match:
        query: db.users.aggregate([{$match: {city: "New York"}}])

        explanation: returns all the documents in the collection "users" with city as "New York"
    
    deleteOne:
        query: db.users.deleteOne({name: "John"})

        explanation: deletes the first document in the collection "users" with name as "John"
    
    deleteMany:
        query: db.users.deleteMany({name: "John"})

        explanation: deletes all the documents in the collection "users" with name as "John"
*/