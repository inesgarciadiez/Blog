const getAll = () => {
    return db.query(`SELECT post.id, titulo, descripcion, fecha_creacion, categoria, nombre, email, imagen FROM posts as post
    INNER JOIN autores as autor ON post.AUTOR_id = autor.id`);
}

const getById = (AUTOR_id) => {
    return db.query('select * from posts where id = ?', [AUTOR_id]);
}

const getByAutorId = (AUTOR_id) => {
    return db.query(
        `SELECT post.id, titulo, descripcion, fecha_creacion, categoria, nombre, email, imagen FROM posts as post
        INNER JOIN autores as autor ON post.AUTOR_id = autor.id
        WHERE post.AUTOR_id = ?`,
          [AUTOR_id]
    );
}

const create = ({ titulo, descripcion, fecha_creacion, categoria, AUTOR_id}) => {
    return db.query('insert into posts (titulo, descripcion, fecha_creacion, categoria, AUTOR_id) values (?, ?, ?, ?, ?)',
    [titulo, descripcion, fecha_creacion, categoria, AUTOR_id]
    )
}

module.exports = {
    getAll, getById, getByAutorId, create
}