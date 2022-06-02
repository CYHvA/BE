# Matchmaking Feature - Blok Tech 4

## What does the project do ?

I have made a feature where people can upload (the upload part is not working yet) their music and fill in their metadata. By filling in the metadata musicians/artists can showcase their work. The idea is to showcase their music so other musicians are interested for a collaboration. So musicians can meet new people that are relatable to them and have some more exposure. The feature at the moment is filling in the metadata and showcasing the metadata to the profile.  


##  How do I install this application ?

To install this application make sure you have Git, Node and NPM installed on your local device. These are mandatory. Once the installation is complete open terminal and type this following commands:

``` 
git clone https://github.com/CYHvA/BE 
```

After cloning the repository, the next step will be installing the packages that you have cloned. Simply type this following command: 
``` 
npm install 
```

Now you have installed the modules in order to make the application work. To start this project simply type this command: 
``` 
npm run dev 
```

Congratulations, you have started the application locally. Now go to a browers and type in 
``` 
localhost:3000 
``` 
and the application will pop up. 

The last step will be connecting MongoDB, an online database enough for simple data. Just make a new .env file and add the information that MongoDB requires. 

## How is the database structured ?

The database structure is really simple. Just create a new database called "dataset" and as collection in the database "songs". The server files will automatically link aslong the name given are correct. 
