// _________________ConfigureServices_______________
// services.AddAutoMapper(Assembly.GetExecutingAssembly());

            // services.AddDbContext<ApplicationDbContext>(opt => opt.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));
// builder.Services.AddMvc();
//    services.AddControllers(options =>
//             {
//                 options.ModelValidatorProviders.Clear();
//                 options.OutputFormatters.Insert(0, new OutputFormatter());

//             }).AddFluentValidation(fv =>
//                {
//                    fv.DisableDataAnnotationsValidation = true;
//                    fv.ImplicitlyValidateChildProperties = true;
//                    fv.AutomaticValidationEnabled = false;
//                })
//             .AddJsonOptions(options =>
//             {
//                 options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
//             });

//  // Adding Authentication
//             services.AddAuthentication(options =>
//             {
//                 options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
//                 options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
//                 options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
//             }).AddJwtBearer(options =>
//             {
//                 options.SaveToken = true;
//                 options.RequireHttpsMetadata = false;
//                 options.TokenValidationParameters = new TokenValidationParameters()
//                 {
//                     ValidateIssuer = true,
//                     ValidateAudience = true,
//                     ValidateLifetime = true,
//                     ValidateIssuerSigningKey = true,
//                     ValidAudience = Configuration["JWT:ValidAudience"],
//                     ValidIssuer = Configuration["JWT:ValidIssuer"],
//                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
//                 };
//             });





//               app.UseMiddleware<LogMiddleware>();
//             app.UseMiddleware<ErrorHandlerMiddleware>();
//             IdentityDataInitializer.SeedIdentityData(userManager, roleManager, permissionRepository);



//    #region Swagger
//             services.AddSwaggerGen(c =>
//             {
//                 c.IncludeXmlComments(string.Format(@"{0}MTNCar.xml", System.AppDomain.CurrentDomain.BaseDirectory));
//                 c.SwaggerDoc("v1", new OpenApiInfo
//                 {
//                     Version = "v1",
//                     Title = "MTNCar",
//                 });
//                 c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
//                 {
//                     In = ParameterLocation.Header,
//                     Description = "Please enter token",
//                     Name = "Authorization",
//                     Type = SecuritySchemeType.Http,
//                     BearerFormat = "JWT",
//                     Scheme = "bearer"
//                 });
//                 c.AddSecurityRequirement(new OpenApiSecurityRequirement
//                 {
//                     {
//                         new OpenApiSecurityScheme
//                         {
//                             Reference = new OpenApiReference
//                             {
//                                 Type=ReferenceType.SecurityScheme,
//                                 Id="Bearer"
//                             }
//                         },
//                         new string[]{}
//                     }
//                 });
//             });

//             #endregion










//             Identity 
//              services.AddHttpContextAccessor();
//             services.AddEndpointsApiExplorer();

//             services.AddDefaultIdentity<User>
//                 (options =>
//                 {
//                     options.SignIn.RequireConfirmedAccount = false;
//                     options.Password.RequireDigit = false;
//                     options.Password.RequiredLength = 6;
//                     options.Password.RequireNonAlphanumeric = false;
//                     options.Password.RequireUppercase = false;
//                     options.Password.RequireLowercase = false;
//                 })
//                 .AddRoles<Role>()
//                 .AddEntityFrameworkStores<MTNCarDbContext>()
//                 .AddDefaultTokenProviders();










// app.UseRouting();
// app.UseEndpoints(endpoints =>
// {
//     endpoints.MapControllers();
// });
