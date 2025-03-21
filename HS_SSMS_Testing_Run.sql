USE InfoHSA;
GO

USE InfoHSA2;
GO

USE InfoHSCP;
GO

USE InfoHSCP;
GO

SELECT * FROM pbspo

SELECT * FROM mitem
SELECT * FROM mitem WHERE item_id='abc'
SELECT * FROM mitem WHERE item_id='popo'
SELECT * FROM mitem WHERE item_id='hoo_testing'
SELECT * FROM mctry
SELECT * FROM mdriver
SELECT * FROM mmakei
SELECT * FROM mbc WHERE bc_id='BC25-00001'
SELECT * FROM ppo
SELECT * FROM dquot
SELECT * FROM gdoc
SELECT * FROM CurrencyCodes
SELECT * FROM mallocation
SELECT * FROM mallocation WHERE allc_id='1'
SELECT * FROM mbc
-- SELECT * FROM mbc_hs
-- SELCT * FROM mservice_seq
SELECT * FROM mstock
SELECT * FROM mdoc
-- SELECT * FROM master_list
SELECT * FROM mdoctype
-- SELECT * FROM pic_attachment
-- SELECT * FROM reporting_service
SELECT * FROM mbranch -- SHared Data
-- SELECT * FROM pbspo

-- Purchasing
SELECT * FROM ppo
-- SELECT * FROM batchpo
SELECT * FROM PPO

-- Sales
SELECT * FROM dso
SELECT * FROM mheader
SELECT * FROM mhead
SELECT * FROM dso

-- Production
SELECT * FROM jchgeng
-- SELECT * FROM job
SELECT * FROM mchassism
-- SELECT * FROM mchassism_do
-- SELECT * FROM mstock_take
SELECT * FROM jsdo
-- SELECT * FROM mstock2
SELECT * FROM jscrap
-- SELECT * FROM mchassis_rec_no
-- SELECT * FROM mchassis_recno


SELECT * FROM muom

-- Store
SELECT * FROM sir
SELECT * FROM schgitem
SELECT * FROM sgrn
SELECT * FROM sfbc

-- Shipping
SELECT * FROM ldo

-- Documentation

-- Spare Parts



-- Supplier Debit Note:
SELECT * FROM gldata
SELECT * FROM glpost
SELECT * FROM glforex
SELECT * FROM pknockoff
SELECT * FROM acc_gst03
SELECT * FROM acc_audit_trail
SELECT * FROM mbc
SELECT * FROM pcndnapi
SELECT * FROM mtax

-- ERP Tables
SELECT * FROM ldo
SELECT * FROM map
SELECT * FROM MFLOCATION