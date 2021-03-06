import {User} from './User';
import {Comment} from './Comment';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  public title: string;

  @Column('text')
  public content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne((type) => User, (user) => user.posts)
  author: User;

  @OneToMany((type) => Comment, (comment) => comment.post)
  comments: Comment[];

  constructor() {}
}
