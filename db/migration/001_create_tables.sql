CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    mobile VARCHAR(13) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    created_at DATE DEFAULT = NOW(),
    updated_at DATE,
    is_active BOOLEAN DEFAULT = 1,
    has_access_revoked BOOLEAN DEFAULT = 0
);

CREATE TABLE IF NOT EXISTS company {
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL UNIQUE,
    registration VARCHAR(10) UNIQUE,
    address VARCHAR(150) NOT NULL,
    email VARCHAR(120) NOT NULL,
    mobile VARCHAR(13) NOT NULL,
    created_at DATE DEFAULT = NOW(),
    updated_at DATE,
    user_id INT,

    FOREIGN KEY (user_id) REFERENCES users(id)
};

CREATE TABLE IF NOT EXISTS client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL UNIQUE,
    address VARCHAR(150) NOT NULL,
    email VARCHAR(120) NOT NULL,
    mobile VARCHAR(13) NOT NULL,
    created_at DATE DEFAULT = NOW(),
    updated_at DATE,
    is_active BOOLEAN DEFAULT = 1,
    user_id INT,

    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS project (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL UNIQUE,
    description VARCHAR(500),
    status VARCHAR(20) NOT NULL,
    rate_type VARCHAR(20) NOT NULL,
    start_date DATE,
    end_date DATE,
    created_at DATE DEFAULT = NOW(),
    updated_at DATE,
    user_id INT,

    FOREIGN KEY (user_id) REFERENCES client(id)
);

CREATE TABLE IF NOT EXISTS milestone {
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL UNIQUE,
    description VARCHAR(500),
    status VARCHAR(20) NOT NULL,
    priority VARCHAR(20) NOT NULL,
    start_date DATE,
    end_date DATE,
    created_at DATE DEFAULT = NOW(),
    updated_at DATE,
    project_id INT,

    FOREIGN KEY (project_id) REFERENCES project(id)
}

CREATE TABLE IF NOT EXISTS task (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL UNIQUE,
    description VARCHAR(500),
    status VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL,
    billable BOOLEAN NOT NULL,
    project_id INT,
    milestone_id INT,

    FOREIGN KEY (project_id) REFERENCES project(id),
    FOREIGN KEY (milestone_id) REFERENCES milestone(id)
);