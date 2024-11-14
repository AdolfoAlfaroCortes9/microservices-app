-- Procedimiento almacenado para la tabla ga_servsupl
CREATE OR REPLACE FUNCTION sp_get_additional_service(product_code INTEGER, service_code INTEGER)
RETURNS TABLE(cod_producto INTEGER, cod_servicio INTEGER, des_servicio VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY SELECT cod_producto, cod_servicio, des_servicio
               FROM ga_servsupl 
               WHERE cod_producto = product_code AND cod_servicio = service_code;
END;
$$;

CREATE OR REPLACE FUNCTION sp_search_service(service_code INTEGER)
RETURNS TABLE(cod_servicio INTEGER, des_servicio VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY SELECT cod_servicio, des_servicio
               FROM ga_servsupl 
               WHERE cod_servicio = service_code;
END;
$$;

-- Procedimiento almacenado para la tabla ge_clientes
CREATE OR REPLACE FUNCTION sp_get_customer(customer_code BIGINT)
RETURNS TABLE(cod_cliente BIGINT, nom_cliente VARCHAR, direccion VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY SELECT cod_cliente, nom_cliente, direccion
               FROM ge_clientes 
               WHERE cod_cliente = customer_code;
END;
$$;

-- Procedimiento almacenado para la tabla ga_intarcel
CREATE OR REPLACE FUNCTION sp_get_pricing_history(subscriber_number BIGINT)
RETURNS TABLE(num_abonado BIGINT, fec_desde DATE, fec_hasta DATE, cod_plantarif VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY SELECT num_abonado, fec_desde, fec_hasta, cod_plantarif
               FROM ga_intarcel 
               WHERE num_abonado = subscriber_number;
END;
$$;

-- Procedimiento almacenado para la tabla ge_productos
CREATE OR REPLACE FUNCTION sp_get_product(product_code INTEGER)
RETURNS TABLE(cod_producto INTEGER, des_producto VARCHAR, ind_real BOOLEAN)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY SELECT cod_producto, des_producto, ind_real
               FROM ge_productos 
               WHERE cod_producto = product_code;
END;
$$;

-- Procedimiento almacenado para la tabla ga_servsuplabo
CREATE OR REPLACE FUNCTION sp_get_suscriber_additional_service(suscriber_number BIGINT, service_code INTEGER)
RETURNS TABLE(num_abonado BIGINT, cod_servicio INTEGER, fec_altabd DATE, ind_estado INTEGER)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY SELECT num_abonado, cod_servicio, fec_altabd, ind_estado
               FROM ga_servsuplabo 
               WHERE num_abonado = suscriber_number AND cod_servicio = service_code;
END;
$$;

-- Procedimiento almacenado para la tabla ga_abocel
CREATE OR REPLACE FUNCTION sp_get_suscriber(suscriber_number BIGINT)
RETURNS TABLE(num_abonado BIGINT, cod_cliente BIGINT, fec_alta DATE)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY SELECT num_abonado, cod_cliente, fec_alta
               FROM ga_abocel 
               WHERE num_abonado = suscriber_number;
END;
$$;