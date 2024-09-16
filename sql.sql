---TABLES
    ---create presentations table
    create table presentations (
        id int primary key generated always as identity,
        name text not null,
        date timestamp with time zone not null,
        description text not null,
        locale text not null,
        slug varchar(150) default 'Front-End',
        created_at timestamp with time zone default now(),
        updated_at timestamp with time zone default now()
    )

---POLICIES
    ---create policy "Enable read access for all users"
    create policy "Enable read access for all users"
    on "public"."presentations"
    as PERMISSIVE
    for SELECT
    to public
    using (
    7
    true
    );