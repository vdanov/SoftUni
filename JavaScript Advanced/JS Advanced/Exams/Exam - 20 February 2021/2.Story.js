class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this.likeCollection = [];
    }


    get likes() {
        if (this.likeCollection.length <= 0) {
            return `${this.title} has 0 likes`;
        } else if (this.likeCollection.length == 1) {
            return `${this.likeCollection[0]} likes this story!`;
        } else {
            return `${this.likeCollection[0]} and ${this.likeCollection.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this.likeCollection.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this.likeCollection.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (this.likeCollection.includes(username)) {
            let idx = this.likeCollection.indexOf(username);
            this.likeCollection.splice(idx, 1);
            
            return `${username} disliked ${this.title}`;
        } else {
            throw new Error("You can't dislike this story!");
        }
    }

    comment(Username, Content, Id) {

        if (!this.comments.some(c => c.Id == Id)) {
            Id = this.comments.length;
            this.comments.push({
                Id: ++Id,
                Username,
                Content,
                Replies: []
            });
            return `${Username} commented on ${this.title}`;
        } else if (this.comments.some(c => c.Id == Id)) {

            for (const comment of this.comments) {
                if (comment.Id == Id) {
                    let idNum = `${Id}.${comment.Replies.length + 1}`;
                    comment.Replies.push({
                        Id: Number(idNum),
                        Username,
                        Content
                    });
                }
            }

            return "You replied successfully";
        }
    }
    toString(sortingType) {


        switch (sortingType) {
            case 'asc':
                this.comments.sort((a, b) => a.Id - b.Id);
                for (const comment of this.comments) {
                    comment.Replies.sort((a, b) => a.Id - b.Id);
                }
                break;
            case 'desc':
                this.comments.sort((a, b) => b.Id - a.Id);
                for (const comment of this.comments) {
                    comment.Replies.sort((a, b) => b.Id - a.Id);
                }
                break;
            case 'username':
                this.comments.sort((a, b) => a.Username.localeCompare(b.Username));
                for (const comment of this.comments) {
                    comment.Replies.sort((a, b) => a.Username.localeCompare(b.Username))
                }
                break;
        }

        let output = '';
        output += `Title: ${this.title}\n`;
        output += `Creator: ${this.creator}\n`;
        output += `Likes: ${this.likeCollection.length}\n`;

        if (this.comments.length == 0) {
            output += `Comments:`;
        } else {
            output += `Comments:\n`;
            for (const comment of this.comments) {
                output += `-- ${comment.Id}. ${comment.Username}: ${comment.Content}\n`;

                for (const reply of comment.Replies) {
                    output += `--- ${reply.Id}. ${reply.Username}: ${reply.Content}\n`;
                }
            }
        }
        return output.substring(0, output.length-1);
    }
}

/*
Title: My Story\nCreator: Anny\n
Likes: 0\nComments:\n
-- 2. Ammy: New Content\n
-- 3. Jessy: Nice :)\n
-- 1. Sammy: Some Content\n
--- 1.2. SAmmy: Reply@\n
--- 1.1. Zane: Reply\n'

Title: My Story\nCreator: Anny\n
Likes: 0\nComments:\n
-- 2. Ammy: New Content\n
-- 3. Jessy: Nice :)\n
-- 1. Sammy: Some Content\n
--- 1.2. SAmmy: Reply@\n
--- 1.1. Zane: Reply'
*/









let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));