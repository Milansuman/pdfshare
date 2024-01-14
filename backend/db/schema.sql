create table `users` (
	`id` int not null auto_increment,
	`username` text not null,
	`password` text not null,
	`email` text not null,
	`verified` boolean default false,
	`created_at` datetime not null default current_timestamp on update current_timestamp,
	`modified_at` datetime not null default current_timestamp on update current_timestamp,
	primary key (`id`)
);

create table `collections` (
	`id` int not null auto_increment,
	`title` text not null,
	`visibility` text not null default "private",
	`created_at` datetime not null default current_timestamp on update current_timestamp,
	`modified_at` datetime not null default current_timestamp on update current_timestamp,
	`user_id` int not null,
	primary key (`id`),
	foreign key (`user_id`) references `users`(`id`)
);

create table `documents` (
	`id` int not null auto_increment,
	`title` text not null,
	`file_hash` text not null,
	`mime_type` text not null,
	`visibility` text not null default "private",
	`created_at` datetime not null default current_timestamp on update current_timestamp,
	`modified_at` datetime not null default current_timestamp on update current_timestamp,
	`collection_id` int not null,
	primary key (`id`),
	foreign key (`collection_id`) references `collections`(`id`)
);
