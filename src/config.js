export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://Adi32065:WN0cgQlUyUAmmVRm@cluster0.ilkum1b.mongodb.net/ecommerce?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "aicoderhouse32065",
        "private_key_id": "e54b20973725049a3cb8abb67e5c8b3b277904d3",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvmI1E4jmGD1Aw\n0tA6ZJ4krw+Q25B1WbMn+1bVdg5UvbKIeV5JZJdo48sGD7aWaaRf18mCWYokluEa\n3cz7FGVgRBDL9PnT5WYY5czjC2005Tk3d346oiNrP8xcVyoAFtII1cdNdiISfj/l\nAbDDexJsUhlgWV06bpfA5PdYYyYqD+27QWDVHhG8z1qQ/yU8Nl9FYKwrXQTF5hDN\nNPkaJDM/Wlijoy5q+64BU3YX1iWtJVJxTzYOuMmPOytrCgBt3PtYZq/TX07DWwUm\nc4wJe4HYDuVwVsRJ/gp/nqeJHqU1xotgfdPsamwD2MXepZvrlBNhsXn3wxPI96jo\n2Eacdl6LAgMBAAECggEAAajOvPXpAUFSdVj+ABnvUf1th5BA9JBHxyWdk8rX0Skx\nxLm7kF9TpvlwHmXg8y7wZLokp1yyl4Htgql8mcApl8KiPgCEqTdObbHOQTRccIGH\nYY95hpL9rrJy+0m/ldyhWNVcWs5g/WJqttP7Qv2owOlNtWwNcNNBZTXvYyByEzer\nT452z6gpNIUfUQ6oB2rKvytQmlWg0CN3Wp2RyKo2bC/w4BPhPni/28Lyeq5nVhfO\nK4WmSSq3PLyng3SgBFNKDJCETPzJC+hX4K3Yf/YHsxVPSCZ4Q0OeTu8MYpU+2iFd\nHke4hKxITgBiErDL4Tdzn8uyQ0M8LspEYzijPJLt0QKBgQDV9qbdD6AUz98eQ2Sh\nBMXqgNgn7sZ9bq84ihLC3Co3h9Lsf5Q7w1S2SSl6b3fqGHl/fDhGzRqG5IB6FXsL\ndyrOw9jokDWoh4ZIjiDB5cN8NyFDrcDFGc6zjT5J3g8QIOIF8+2Z1gHusLh5JYrV\nUn+YGJazkGyQsOUgpqJzvnnijwKBgQDSGDFfWMsQwqQ/QpeWX5um78WCumz+wb4U\n2lAQ8aV8hB+lc2Jy7EVH+SPSM3Bpq59QnhXpaFWeqAS3WekCWVwLBZPCO0YEvd/Z\nG1TISlq+5jqjov+koyULfUBoBDiZeRvx3kzvPyLrKGej6LGMuVJpaMzEFAydQyZv\n8d9h743SRQKBgAj6ZpoUE8WLy3L7pPdUufFTIr7aOB3/TP70XEEs9+CIpIMj/1Za\npe1YOJNYphF+oWqGDd56sMhEQlfdGuKqR3ORqEJp+rZtqWbV/+3i9Eb8ETtDyTj8\nEj5aiOiUltE4cAOL7sZrwnz/kV4UAzVcVtpM/dXfE48mvRaXp21v6rFlAoGADt8V\nh5lCboJInA27qzJDU1K/mVxW4MWYDePSLRDd1O2JS+3Z9yaQVOLmzTdE6sXyNgOq\nq2XuQZfFFbFwk/D9We5gIiyN7UH/eV+85ZyVxdOILRMZo27E7YZFK9e4pexztPA2\nY+0FLL4kb+7Fup9XnQyFChAdQHiDXQMy+7y4Pj0CgYEArCvASkaV9DfCEdEonkdH\nQ6zGTlocWkM/gCVunaZY10pNwntYxm6wlulQVDKrxK62/gicn9RQQ8CNvUL6DDiX\nMzp0FcDvUm3JZ0ul4Yz+7wCHKnL44i9gtGjAk+ULejAbGGW82kGsGF3cwPtPi/hf\njzUXcP0FeH+jR3Zj/m5h8XY=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-vus4v@aicoderhouse32065.iam.gserviceaccount.com",
        "client_id": "113757845507546871140",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vus4v%40aicoderhouse32065.iam.gserviceaccount.com"
      },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'coderhouse'
        }
    }
}