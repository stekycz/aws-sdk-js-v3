// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { PauseServiceRequest, PauseServiceResponse, PauseServiceResponseFilterSensitiveLog } from "../models/models_0";
import { de_PauseServiceCommand, se_PauseServiceCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PauseServiceCommand}.
 */
export interface PauseServiceCommandInput extends PauseServiceRequest {}
/**
 * @public
 *
 * The output of {@link PauseServiceCommand}.
 */
export interface PauseServiceCommandOutput extends PauseServiceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is
 *       removed).</p>
 *          <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a>
 *       call to track the operation's progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, PauseServiceCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, PauseServiceCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // PauseServiceRequest
 *   ServiceArn: "STRING_VALUE", // required
 * };
 * const command = new PauseServiceCommand(input);
 * const response = await client.send(command);
 * // { // PauseServiceResponse
 * //   Service: { // Service
 * //     ServiceName: "STRING_VALUE", // required
 * //     ServiceId: "STRING_VALUE", // required
 * //     ServiceArn: "STRING_VALUE", // required
 * //     ServiceUrl: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //     Status: "CREATE_FAILED" || "RUNNING" || "DELETED" || "DELETE_FAILED" || "PAUSED" || "OPERATION_IN_PROGRESS", // required
 * //     SourceConfiguration: { // SourceConfiguration
 * //       CodeRepository: { // CodeRepository
 * //         RepositoryUrl: "STRING_VALUE", // required
 * //         SourceCodeVersion: { // SourceCodeVersion
 * //           Type: "BRANCH", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         CodeConfiguration: { // CodeConfiguration
 * //           ConfigurationSource: "REPOSITORY" || "API", // required
 * //           CodeConfigurationValues: { // CodeConfigurationValues
 * //             Runtime: "PYTHON_3" || "NODEJS_12" || "NODEJS_14" || "CORRETTO_8" || "CORRETTO_11" || "NODEJS_16" || "GO_1" || "DOTNET_6" || "PHP_81" || "RUBY_31", // required
 * //             BuildCommand: "STRING_VALUE",
 * //             StartCommand: "STRING_VALUE",
 * //             Port: "STRING_VALUE",
 * //             RuntimeEnvironmentVariables: { // RuntimeEnvironmentVariables
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             RuntimeEnvironmentSecrets: { // RuntimeEnvironmentSecrets
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         SourceDirectory: "STRING_VALUE",
 * //       },
 * //       ImageRepository: { // ImageRepository
 * //         ImageIdentifier: "STRING_VALUE", // required
 * //         ImageConfiguration: { // ImageConfiguration
 * //           RuntimeEnvironmentVariables: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           StartCommand: "STRING_VALUE",
 * //           Port: "STRING_VALUE",
 * //           RuntimeEnvironmentSecrets: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         ImageRepositoryType: "ECR" || "ECR_PUBLIC", // required
 * //       },
 * //       AutoDeploymentsEnabled: true || false,
 * //       AuthenticationConfiguration: { // AuthenticationConfiguration
 * //         ConnectionArn: "STRING_VALUE",
 * //         AccessRoleArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     InstanceConfiguration: { // InstanceConfiguration
 * //       Cpu: "STRING_VALUE",
 * //       Memory: "STRING_VALUE",
 * //       InstanceRoleArn: "STRING_VALUE",
 * //     },
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KmsKey: "STRING_VALUE", // required
 * //     },
 * //     HealthCheckConfiguration: { // HealthCheckConfiguration
 * //       Protocol: "TCP" || "HTTP",
 * //       Path: "STRING_VALUE",
 * //       Interval: Number("int"),
 * //       Timeout: Number("int"),
 * //       HealthyThreshold: Number("int"),
 * //       UnhealthyThreshold: Number("int"),
 * //     },
 * //     AutoScalingConfigurationSummary: { // AutoScalingConfigurationSummary
 * //       AutoScalingConfigurationArn: "STRING_VALUE",
 * //       AutoScalingConfigurationName: "STRING_VALUE",
 * //       AutoScalingConfigurationRevision: Number("int"),
 * //       Status: "ACTIVE" || "INACTIVE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       HasAssociatedService: true || false,
 * //       IsDefault: true || false,
 * //     },
 * //     NetworkConfiguration: { // NetworkConfiguration
 * //       EgressConfiguration: { // EgressConfiguration
 * //         EgressType: "DEFAULT" || "VPC",
 * //         VpcConnectorArn: "STRING_VALUE",
 * //       },
 * //       IngressConfiguration: { // IngressConfiguration
 * //         IsPubliclyAccessible: true || false,
 * //       },
 * //       IpAddressType: "IPV4" || "DUAL_STACK",
 * //     },
 * //     ObservabilityConfiguration: { // ServiceObservabilityConfiguration
 * //       ObservabilityEnabled: true || false, // required
 * //       ObservabilityConfigurationArn: "STRING_VALUE",
 * //     },
 * //   },
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PauseServiceCommandInput - {@link PauseServiceCommandInput}
 * @returns {@link PauseServiceCommandOutput}
 * @see {@link PauseServiceCommandInput} for command's `input` shape.
 * @see {@link PauseServiceCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>You can't perform this action when the resource is in its current state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 */
export class PauseServiceCommand extends $Command<
  PauseServiceCommandInput,
  PauseServiceCommandOutput,
  AppRunnerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: PauseServiceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppRunnerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PauseServiceCommandInput, PauseServiceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PauseServiceCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppRunnerClient";
    const commandName = "PauseServiceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: PauseServiceResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppRunner",
        operation: "PauseService",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PauseServiceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PauseServiceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PauseServiceCommandOutput> {
    return de_PauseServiceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
