const getAll = () => {
    return db.query('select * from autores');
}

const getById = (autorId) => {
    return db.query('select * from autores where id = ?', [autorId]);
}

const create = ({nombre, email, imagen}) => {
    return db.query(
        'insert into autores (nombre, email, imagen) values (?, ?, ?)',
        [nombre, email, imagen]
    );
}

const update = (autorId, { nombre, email, imagen}) => {
    return db.query(
        'update autores set nombre = ?, email = ?, imagen = ? where id = ?',
        [nombre, email, imagen, autorId]
    );
}

module.exports = {
    getAll, getById, create, update
}