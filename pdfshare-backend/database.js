const {Sequelize, DataTypes} = require("sequelize");
const process = require("node:process");

const sequelize = new Sequelize("pdfshare", process.env.DB_USER, process.env.DB_PASS, {
    host: "localhost",
    dialect: "mariadb"
});

module.exports.sync = () => {
    sequelize.sync({force: true});
}

module.exports.Document = sequelize.define("Document", {
    fileName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fileType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visibility: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "private",
        validate: {
            isIn: [["private", "public", "protected"]]
        }
    }
});

module.exports.Collection = sequelize.define("Collection", {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    thumbnail: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    visibility: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "private",
        validate: {
            isIn: [["private", "public", "protected"]]
        }
    }
});
this.Collection.hasMany(this.Document);
this.Document.belongsTo(this.Collection);
this.Collection.hasMany(this.Collection);
this.Collection.belongsTo(this.Collection);

module.exports.User = sequelize.define('User', {
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});
this.User.hasMany(this.Collection);
this.Collection.belongsTo(this.User);