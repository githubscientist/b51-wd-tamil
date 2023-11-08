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
*/