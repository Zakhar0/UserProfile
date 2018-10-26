Please write a web service in your language of choice that creates a user profile. Feel free to use any data source (relational, non-relational database, in-memory datastructure, etc.).

# Node REST API

API for registering users with mongodb.

### Version
1.0.0

## Usage

```bash
npm install
```

```bash
npm start
```

##Endpoints
```bash
POST /profile/new
```

```bash
PUT /profile/update
```

```bash
DELETE /profile/remove
```

```bash
GET /profile/<id>
```

## Notes

To generate UUID, we can use this package. https://www.npmjs.com/package/uuid
