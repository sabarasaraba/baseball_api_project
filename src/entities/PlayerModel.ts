import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({name: "players"})
class Player {
  @PrimaryGeneratedColumn("uuid")
  public playerID: string;
  
  @Column({
      default: null
  })
  public birthYear: number;

  @Column({
      default: null
  })
  public birthMonth: number;

  @Column({
      default: null
  })
  public birthDay: number;
  
  @Column({
      default: null
  })
  public birthCountry: string;
  
  @Column({
      default: null
  })
  public birthState: string;
  
  @Column({
      default: null
  })
  public birthCity: string;
  
  @Column({
      default: null
  })
  public deathYear: number;
  
  @Column({
      default: null
  })
  public deathMonth: number;
  
  @Column({
      default: null
  })
  public deathDay: number;
  
  @Column({
      default: null
  })
  public deathCountry: string;
  
  @Column({
      default: null
  })
  public deathState: string;
  
  @Column({
      default: null
  })
  public deathCity: string;
  
  @Column({
      default: null
  })
  public nameFirst: string;
  
  @Column({
      default: null
  })
  public nameLast: string;
  
  @Column({
      default: null
  })
  public nameGiven: string;
  
  @Column({
      default: null
  })
  public weight: number;
  
  @Column({
      default: null
  })
  public height: number;
  
  @Column({
      default: null
  })
  public bats: string;
  
  @Column({
      default: null
  })
  public throws: string;
  
  @Column({
      default: null
  })
  public debut: Date;
  
  @Column({
      default: null
  })
  public finalGame: Date;
  
  @Column({
      default: null
  })
  public retroID: string;
  
  @Column({
      default: null
  })
  public bbrefID: string;

}

export default Player;