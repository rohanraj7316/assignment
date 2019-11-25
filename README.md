# Assignment

## Start the app

Create docker image.

```
docker build -t assignment .
```

Create container.

```
docker run -d assignment
```

## API Docs

### Health App: /GET /health
### Create User: /POST /user
    
    header: {
        Content-Type: "application/json"
    }
    body: {
	    "email": "rohanraj@forkmedia.in",
	    "name": "Rohan Raj",
	    "department": "IT",
	    "phone_number": "7731825058" 
    }
### Read User: /GET /user
### Update User: /PUT /user
    header: {
        Content-Type: "application/json"
    }
    body: {
	    "filter": {
		    "email": "rohanraj@forkmedia.in"
	    },
	    "update": {
		    "phone_number": "7731825028"
	    }
    }

### Delete User: /DELETE /user

header: {
        Content-Type: "application/json"
    }
    body: {
	    "filter": {
		    "email": "rohanraj@forkmedia.in"
	    }
    }
