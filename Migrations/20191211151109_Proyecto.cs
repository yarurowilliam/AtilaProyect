using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AtilaV1.Migrations
{
    public partial class Proyecto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Asignaturas",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    NombreAsignatura = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Asignaturas", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false),
                    Discriminator = table.Column<string>(nullable: false),
                    FullName = table.Column<string>(type: "nvarchar(150)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Calificacions",
                columns: table => new
                {
                    Codigo = table.Column<string>(nullable: false),
                    Titulo = table.Column<string>(nullable: false),
                    Docid = table.Column<string>(nullable: false),
                    Docname = table.Column<string>(nullable: false),
                    Rubricacodigo = table.Column<string>(nullable: false),
                    Rubricanombre = table.Column<string>(nullable: false),
                    Item_1 = table.Column<int>(nullable: false),
                    Item_2 = table.Column<int>(nullable: false),
                    Item_3 = table.Column<int>(nullable: false),
                    Item_4 = table.Column<int>(nullable: false),
                    Item_5 = table.Column<int>(nullable: false),
                    Item_6 = table.Column<int>(nullable: false),
                    Item_7 = table.Column<int>(nullable: false),
                    Item_8 = table.Column<int>(nullable: false),
                    Item_9 = table.Column<int>(nullable: false),
                    Item_10 = table.Column<int>(nullable: false),
                    Item_11 = table.Column<int>(nullable: false),
                    Item_12 = table.Column<int>(nullable: false),
                    Item_13 = table.Column<int>(nullable: false),
                    Item_14 = table.Column<int>(nullable: false),
                    Item_15 = table.Column<int>(nullable: false),
                    Item_16 = table.Column<int>(nullable: false),
                    Item_17 = table.Column<int>(nullable: false),
                    Item_18 = table.Column<int>(nullable: false),
                    Item_19 = table.Column<int>(nullable: false),
                    Promedio = table.Column<double>(nullable: false),
                    Observacion = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Calificacions", x => x.Codigo);
                });

            migrationBuilder.CreateTable(
                name: "Convocatorias",
                columns: table => new
                {
                    Periodo = table.Column<string>(nullable: false),
                    FechaInicio = table.Column<string>(nullable: false),
                    FechaFin = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Convocatorias", x => x.Periodo);
                });

            migrationBuilder.CreateTable(
                name: "Docentes",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    PrimerApellido = table.Column<string>(nullable: false),
                    SegundoApellido = table.Column<string>(nullable: true),
                    PrimerNombre = table.Column<string>(nullable: false),
                    SegundoNombre = table.Column<string>(nullable: true),
                    Rol = table.Column<string>(nullable: false),
                    Telefono = table.Column<string>(nullable: true),
                    Correo = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docentes", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "Estudiantes",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    Nombres = table.Column<string>(nullable: false),
                    Apellidos = table.Column<string>(nullable: false),
                    Correo = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estudiantes", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "Proyectos",
                columns: table => new
                {
                    Codigo = table.Column<string>(nullable: false),
                    Titulo = table.Column<string>(nullable: false),
                    Introduccion = table.Column<string>(nullable: false),
                    Objetivos = table.Column<string>(nullable: false),
                    Metodologia = table.Column<string>(nullable: false),
                    Resultados = table.Column<string>(nullable: false),
                    Concluciones = table.Column<string>(nullable: false),
                    Referencias = table.Column<string>(nullable: false),
                    Estado = table.Column<string>(nullable: false),
                    Observacion = table.Column<string>(nullable: true),
                    Pendon = table.Column<byte[]>(nullable: true),
                    Coddoc = table.Column<string>(nullable: true),
                    Namedoc = table.Column<string>(nullable: true),
                    Codasig = table.Column<string>(nullable: true),
                    Nameasig = table.Column<string>(nullable: true),
                    Codalum1 = table.Column<string>(nullable: true),
                    Namealum1 = table.Column<string>(nullable: true),
                    Codalum2 = table.Column<string>(nullable: true),
                    Namealum2 = table.Column<string>(nullable: true),
                    Codalum3 = table.Column<string>(nullable: true),
                    Namealum3 = table.Column<string>(nullable: true),
                    Coddocrev = table.Column<string>(nullable: true),
                    Namedocrev = table.Column<string>(nullable: true),
                    Idcalificador = table.Column<string>(nullable: true),
                    Namecalificador = table.Column<string>(nullable: true),
                    Rubricacodigo = table.Column<string>(nullable: true),
                    Item_1 = table.Column<int>(nullable: false),
                    Item_2 = table.Column<int>(nullable: false),
                    Item_3 = table.Column<int>(nullable: false),
                    Item_4 = table.Column<int>(nullable: false),
                    Item_5 = table.Column<int>(nullable: false),
                    Item_6 = table.Column<int>(nullable: false),
                    Item_7 = table.Column<int>(nullable: false),
                    Item_8 = table.Column<int>(nullable: false),
                    Item_9 = table.Column<int>(nullable: false),
                    Item_10 = table.Column<int>(nullable: false),
                    Item_11 = table.Column<int>(nullable: false),
                    Item_12 = table.Column<int>(nullable: false),
                    Item_13 = table.Column<int>(nullable: false),
                    Item_14 = table.Column<int>(nullable: false),
                    Item_15 = table.Column<int>(nullable: false),
                    Item_16 = table.Column<int>(nullable: false),
                    Item_17 = table.Column<int>(nullable: false),
                    Item_18 = table.Column<int>(nullable: false),
                    Item_19 = table.Column<int>(nullable: false),
                    Promedio = table.Column<double>(nullable: false),
                    Final = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proyectos", x => x.Codigo);
                });

            migrationBuilder.CreateTable(
                name: "Rubricas",
                columns: table => new
                {
                    Codigo = table.Column<string>(nullable: false),
                    Titulo = table.Column<string>(nullable: false),
                    Item_1 = table.Column<string>(nullable: false),
                    Item_2 = table.Column<string>(nullable: false),
                    Item_3 = table.Column<string>(nullable: false),
                    Item_4 = table.Column<string>(nullable: false),
                    Item_5 = table.Column<string>(nullable: false),
                    Item_6 = table.Column<string>(nullable: false),
                    Item_7 = table.Column<string>(nullable: false),
                    Item_8 = table.Column<string>(nullable: false),
                    Item_9 = table.Column<string>(nullable: false),
                    Item_10 = table.Column<string>(nullable: false),
                    Item_11 = table.Column<string>(nullable: false),
                    Item_12 = table.Column<string>(nullable: false),
                    Item_13 = table.Column<string>(nullable: false),
                    Item_14 = table.Column<string>(nullable: false),
                    Item_15 = table.Column<string>(nullable: false),
                    Item_16 = table.Column<string>(nullable: false),
                    Item_17 = table.Column<string>(nullable: false),
                    Item_18 = table.Column<string>(nullable: false),
                    Item_19 = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rubricas", x => x.Codigo);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(nullable: false),
                    ProviderKey = table.Column<string>(nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Asignaturas");

            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "Calificacions");

            migrationBuilder.DropTable(
                name: "Convocatorias");

            migrationBuilder.DropTable(
                name: "Docentes");

            migrationBuilder.DropTable(
                name: "Estudiantes");

            migrationBuilder.DropTable(
                name: "Proyectos");

            migrationBuilder.DropTable(
                name: "Rubricas");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
