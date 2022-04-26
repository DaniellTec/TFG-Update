create database if not exists art;

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema arte
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema arte
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `arte` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `arte` ;

-- -----------------------------------------------------
-- Table `arte`.`pinturas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`pinturas` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `autor` VARCHAR(45) NULL,
  `descripcion` VARCHAR(245) NOT NULL,
  `precio` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`fotografias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`fotografias` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `autor` VARCHAR(45) NULL,
  `descripcion` VARCHAR(245) NOT NULL,
  `precio` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`fotografias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`fotografias` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `autor` VARCHAR(45) NULL,
  `descripcion` VARCHAR(245) NOT NULL,
  `precio` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`museos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`museos` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(245) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`entradas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`entradas` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(245) NOT NULL,
  `precio` INT NOT NULL,
  `museos_id` INT NOT NULL,
  `museos_id1` INT NOT NULL,
  PRIMARY KEY (`id`, `museos_id`),
  INDEX `fk_entradas_museos1_idx` (`museos_id1` ASC) VISIBLE,
  CONSTRAINT `fk_entradas_museos1`
    FOREIGN KEY (`museos_id1`)
    REFERENCES `arte`.`museos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`opiniones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`opiniones` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(245) NOT NULL,
  `museos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_opiniones_museos1_idx` (`museos_id` ASC) VISIBLE,
  CONSTRAINT `fk_opiniones_museos1`
    FOREIGN KEY (`museos_id`)
    REFERENCES `arte`.`museos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`users` (
  `idusers` BIGINT(40) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(225) NOT NULL,
  `email_verified_at` TIMESTAMP(6) NULL,
  `password` VARCHAR(255) NOT NULL,
  `remember_token` VARCHAR(205) NULL,
  `created_at` TIMESTAMP(6) NULL,
  `updated_at` TIMESTAMP(6) NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`address` (
  `idaddress` SMALLINT(20) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `address2` VARCHAR(20) NOT NULL,
  `postalCode` VARCHAR(45) NULL,
  `phone` BIGINT(155) NOT NULL,
  `lastUpdate` TIMESTAMP(6) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idaddress`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`customers` (
  `idCustomers` INT NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `createDate` DATETIME(6) NOT NULL,
  `users_idusers` BIGINT(40) NOT NULL,
  `address_idaddress` SMALLINT(20) NOT NULL,
  PRIMARY KEY (`idCustomers`),
  INDEX `fk_customers_users1_idx` (`users_idusers` ASC) VISIBLE,
  INDEX `fk_customers_address1_idx` (`address_idaddress` ASC) VISIBLE,
  CONSTRAINT `fk_customers_users1`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `arte`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_customers_address1`
    FOREIGN KEY (`address_idaddress`)
    REFERENCES `arte`.`address` (`idaddress`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`payments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`payments` (
  `idpayments` INT NOT NULL,
  `amount` DECIMAL(5,2) NOT NULL,
  `paymentDate` DATETIME NOT NULL,
  `lastUpdate` TIMESTAMP(6) NOT NULL,
  `staffs_idsatffs` INT NOT NULL,
  `types_idType` INT NOT NULL,
  PRIMARY KEY (`idpayments`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`bill` (
  `idbill` INT NOT NULL,
  `billDate` TIMESTAMP(6) NOT NULL,
  `bilValidate` TINYINT(55) NOT NULL,
  `billToken` INT(55) NOT NULL,
  `discount` FLOAT NOT NULL,
  `value` FLOAT NOT NULL,
  `price` FLOAT NOT NULL,
  `customers_idCustomers` INT NOT NULL,
  `payments_idpayments` INT NOT NULL,
  PRIMARY KEY (`idbill`),
  INDEX `fk_bill_customers1_idx` (`customers_idCustomers` ASC) VISIBLE,
  INDEX `fk_bill_payments1_idx` (`payments_idpayments` ASC) VISIBLE,
  CONSTRAINT `fk_bill_customers1`
    FOREIGN KEY (`customers_idCustomers`)
    REFERENCES `arte`.`customers` (`idCustomers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bill_payments1`
    FOREIGN KEY (`payments_idpayments`)
    REFERENCES `arte`.`payments` (`idpayments`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`purchasedHistory`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`purchasedHistory` (
  `idpurchasedHistory` INT NOT NULL,
  `lastUpdate` TIMESTAMP(6) NOT NULL,
  `bill_idbill` INT NOT NULL,
  `pinturas_id` INT NOT NULL,
  `entradas_id` INT NOT NULL,
  `entradas_museos_id` INT NOT NULL,
  `fotografias_id` INT NOT NULL,
  PRIMARY KEY (`idpurchasedHistory`),
  INDEX `fk_purchasedHistory_bill1_idx` (`bill_idbill` ASC) VISIBLE,
  INDEX `fk_purchasedHistory_pinturas1_idx` (`pinturas_id` ASC) VISIBLE,
  INDEX `fk_purchasedHistory_entradas1_idx` (`entradas_id` ASC, `entradas_museos_id` ASC) VISIBLE,
  INDEX `fk_purchasedHistory_fotografias1_idx` (`fotografias_id` ASC) VISIBLE,
  CONSTRAINT `fk_purchasedHistory_bill1`
    FOREIGN KEY (`bill_idbill`)
    REFERENCES `arte`.`bill` (`idbill`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_purchasedHistory_pinturas1`
    FOREIGN KEY (`pinturas_id`)
    REFERENCES `arte`.`pinturas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_purchasedHistory_entradas1`
    FOREIGN KEY (`entradas_id` , `entradas_museos_id`)
    REFERENCES `arte`.`entradas` (`id` , `museos_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_purchasedHistory_fotografias1`
    FOREIGN KEY (`fotografias_id`)
    REFERENCES `arte`.`fotografias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`paymentsmethods`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`paymentsmethods` (
  `idpaymentsmethods` INT NOT NULL,
  `purchasedHistory_idpurchasedHistory` INT NOT NULL,
  PRIMARY KEY (`idpaymentsmethods`),
  INDEX `fk_paymentsmethods_purchasedHistory1_idx` (`purchasedHistory_idpurchasedHistory` ASC) VISIBLE,
  CONSTRAINT `fk_paymentsmethods_purchasedHistory1`
    FOREIGN KEY (`purchasedHistory_idpurchasedHistory`)
    REFERENCES `arte`.`purchasedHistory` (`idpurchasedHistory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`migrations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`migrations` (
  `idmigrations` INT NOT NULL,
  `migrations` VARCHAR(255) NOT NULL,
  `batch` INT NOT NULL,
  PRIMARY KEY (`idmigrations`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`passwordResets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`passwordResets` (
  `email` VARCHAR(255) NOT NULL,
  `token` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP(6) NULL)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`creditCard`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`creditCard` (
  `idcreditCard` INT NOT NULL,
  `creditCardNumber` BIGINT(55) NULL,
  `creditCardCcv` INT NULL,
  `creditCardExpireYear` VARCHAR(45) NULL,
  `creditCardExpireDate` VARCHAR(45) NULL,
  `creditCardOwner` VARCHAR(45) NULL,
  `creditCardType` VARCHAR(45) NULL,
  PRIMARY KEY (`idcreditCard`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `arte`.`dabirCard`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `arte`.`dabirCard` (
  `iddabirCard` INT NOT NULL,
  `dabirCardType` VARCHAR(45) NOT NULL,
  `dabirCardCcv` INT NOT NULL,
  `dabirCardExpireDate` VARCHAR(45) NOT NULL,
  `debitCardOwner` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iddabirCard`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
