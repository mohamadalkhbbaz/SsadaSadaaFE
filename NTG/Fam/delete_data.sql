DELETE FROM "MOJODAT1"."ORD_SHIPMENT_HDR"  ;
DELETE FROM "MOJODAT1"."ORD_IN_BOUND_HDR"  ;
DELETE FROM "MOJODAT1"."ORD_OUT_BOUND_HDR"  ;
DELETE FROM "MOJODAT1"."ORD_PICK_LIST_HDR" ;
DELETE FROM "MOJODAT1"."FIN_FA_MOVEMENTS" ;
DELETE FROM "MOJODAT1"."FIN_FA_MOVEMENTS_HDR"; 


UPDATE "MOJODAT1"."FIN_FA_DEFINITION"
 Set "ISPICKED" = false
	   WHERE   "ISPICKED" = true;
	   