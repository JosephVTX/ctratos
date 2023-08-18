<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * App\Models\Area
 *
 * @property int $id
 * @property string $departamento
 * @property string $direccion
 * @property int $supervisor_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Contrato> $contratos
 * @property-read int|null $contratos_count
 * @property-read \App\Models\Supervisor $supervisor
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Database\Factories\AreaFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Area newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Area newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Area query()
 * @method static \Illuminate\Database\Eloquent\Builder|Area whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Area whereDepartamento($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Area whereDireccion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Area whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Area whereSupervisorId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Area whereUpdatedAt($value)
 */
	class Area extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Bank
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Bank newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Bank newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Bank query()
 */
	class Bank extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Client
 *
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property string $type_document
 * @property string $document
 * @property string $department
 * @property string $province
 * @property string $district
 * @property string $address
 * @property string $email
 * @property string $phone
 * @property string $gender
 * @property string $occupation
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\ClientFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Client newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Client newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Client query()
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereDepartment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereDistrict($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereDocument($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereOccupation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereProvince($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereTypeDocument($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Client whereUpdatedAt($value)
 */
	class Client extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ClientAccount
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|ClientAccount newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClientAccount newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClientAccount query()
 * @method static \Illuminate\Database\Eloquent\Builder|ClientAccount whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClientAccount whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClientAccount whereUpdatedAt($value)
 */
	class ClientAccount extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ContractType
 *
 * @property int $id
 * @property string $name
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ContractValidity> $contractValidity
 * @property-read int|null $contract_validity_count
 * @method static \Illuminate\Database\Eloquent\Builder|ContractType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContractType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContractType query()
 * @method static \Illuminate\Database\Eloquent\Builder|ContractType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractType whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractType whereUpdatedAt($value)
 */
	class ContractType extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\ContractValidity
 *
 * @property int $id
 * @property int $quantity
 * @property string $unit
 * @property int $profit_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\ContractType|null $contractType
 * @method static \Illuminate\Database\Eloquent\Builder|ContractValidity newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContractValidity newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ContractValidity query()
 * @method static \Illuminate\Database\Eloquent\Builder|ContractValidity whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractValidity whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractValidity whereProfitId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractValidity whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractValidity whereUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ContractValidity whereUpdatedAt($value)
 */
	class ContractValidity extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Contrato
 *
 * @property int $id
 * @property int $user_id
 * @property int $area_id
 * @property string $nombres
 * @property string $apellidos
 * @property string $tipo_doc
 * @property string $numero_doc
 * @property array $departamento
 * @property array $provincia
 * @property string $distrito
 * @property string $direccion
 * @property string $correo
 * @property string $celular
 * @property string $genero
 * @property string $ocupacion
 * @property string $tipo_contrato
 * @property array $rentabilidad
 * @property array $vigencia_contrato
 * @property string $moneda
 * @property string $capital
 * @property string $fecha_inicio
 * @property string $fecha_fin
 * @property string $banco_cliente
 * @property string $tipo_cuenta_cliente
 * @property string $numero_cuenta_cliente
 * @property string $numero_cci_cliente
 * @property string $dni_anverso
 * @property string $dni_reverso
 * @property array $banco_gjg
 * @property array $declaracion_jurada
 * @property array $sustento_declaracion_jurada
 * @property array $comprobantes_pago
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Area $area
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\ContratoFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato query()
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereApellidos($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereAreaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereBancoCliente($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereBancoGjg($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereCapital($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereCelular($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereComprobantesPago($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereCorreo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereDeclaracionJurada($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereDepartamento($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereDireccion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereDistrito($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereDniAnverso($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereDniReverso($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereFechaFin($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereFechaInicio($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereGenero($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereMoneda($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereNombres($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereNumeroCciCliente($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereNumeroCuentaCliente($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereNumeroDoc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereOcupacion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereProvincia($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereRentabilidad($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereSustentoDeclaracionJurada($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereTipoContrato($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereTipoCuentaCliente($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereTipoDoc($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Contrato whereVigenciaContrato($value)
 */
	class Contrato extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Departamento
 *
 * @property string $id
 * @property string $nombre
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Distrito> $distritos
 * @property-read int|null $distritos_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Provincia> $provincias
 * @property-read int|null $provincias_count
 * @method static \Illuminate\Database\Eloquent\Builder|Departamento newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Departamento newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Departamento query()
 * @method static \Illuminate\Database\Eloquent\Builder|Departamento whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Departamento whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Departamento whereNombre($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Departamento whereUpdatedAt($value)
 */
	class Departamento extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Distrito
 *
 * @property string $id
 * @property string $nombre
 * @property string $provincia_id
 * @property string $departamento_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Departamento $departamento
 * @property-read \App\Models\Provincia $provincia
 * @method static \Illuminate\Database\Eloquent\Builder|Distrito newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Distrito newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Distrito query()
 * @method static \Illuminate\Database\Eloquent\Builder|Distrito whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Distrito whereDepartamentoId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Distrito whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Distrito whereNombre($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Distrito whereProvinciaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Distrito whereUpdatedAt($value)
 */
	class Distrito extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Profit
 *
 * @property int $id
 * @property string $percent
 * @property int $contract_type_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Profit newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Profit newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Profit query()
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereContractTypeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit wherePercent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Profit whereUpdatedAt($value)
 */
	class Profit extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Provincia
 *
 * @property string $id
 * @property string $nombre
 * @property string $departamento_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Departamento $departamento
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Distrito> $distritos
 * @property-read int|null $distritos_count
 * @method static \Illuminate\Database\Eloquent\Builder|Provincia newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Provincia newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Provincia query()
 * @method static \Illuminate\Database\Eloquent\Builder|Provincia whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provincia whereDepartamentoId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provincia whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provincia whereNombre($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Provincia whereUpdatedAt($value)
 */
	class Provincia extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Rentabilidad
 *
 * @property int $id
 * @property string $porcentaje
 * @property int $tipo_contrato_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\TipoContrato $tipoContrato
 * @method static \Illuminate\Database\Eloquent\Builder|Rentabilidad newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Rentabilidad newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Rentabilidad query()
 * @method static \Illuminate\Database\Eloquent\Builder|Rentabilidad whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rentabilidad whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rentabilidad wherePorcentaje($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rentabilidad whereTipoContratoId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rentabilidad whereUpdatedAt($value)
 */
	class Rentabilidad extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Schedule
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Database\Factories\ScheduleFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule query()
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Schedule whereUpdatedAt($value)
 */
	class Schedule extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\Supervisor
 *
 * @property int $id
 * @property string $nombre
 * @property string $apellido
 * @property string $documento
 * @property string $telefono
 * @property string $correo
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Area> $areas
 * @property-read int|null $areas_count
 * @method static \Database\Factories\SupervisorFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor query()
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor whereApellido($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor whereCorreo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor whereDocumento($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor whereNombre($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor whereTelefono($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Supervisor whereUpdatedAt($value)
 */
	class Supervisor extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\TipoContrato
 *
 * @property int $id
 * @property string $nombre
 * @property string|null $descripcion
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Rentabilidad> $rentabilidad
 * @property-read int|null $rentabilidad_count
 * @method static \Illuminate\Database\Eloquent\Builder|TipoContrato newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TipoContrato newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TipoContrato query()
 * @method static \Illuminate\Database\Eloquent\Builder|TipoContrato whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TipoContrato whereDescripcion($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TipoContrato whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TipoContrato whereNombre($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TipoContrato whereUpdatedAt($value)
 */
	class TipoContrato extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $username
 * @property string|null $codigo
 * @property int|null $area_id
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Area|null $area
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Contrato> $contratos
 * @property-read int|null $contratos_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Spatie\Permission\Models\Permission> $permissions
 * @property-read int|null $permissions_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Spatie\Permission\Models\Role> $roles
 * @property-read int|null $roles_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User permission($permissions)
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User role($roles, $guard = null)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereAreaId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCodigo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUsername($value)
 */
	class User extends \Eloquent {}
}

namespace App\Models{
/**
 * App\Models\VigenciaContrato
 *
 * @property int $id
 * @property int $cantidad
 * @property string $unidad
 * @property int $rentabilidad_id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|VigenciaContrato newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VigenciaContrato newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|VigenciaContrato query()
 * @method static \Illuminate\Database\Eloquent\Builder|VigenciaContrato whereCantidad($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VigenciaContrato whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VigenciaContrato whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VigenciaContrato whereRentabilidadId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VigenciaContrato whereUnidad($value)
 * @method static \Illuminate\Database\Eloquent\Builder|VigenciaContrato whereUpdatedAt($value)
 */
	class VigenciaContrato extends \Eloquent {}
}

