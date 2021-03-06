/// <reference path="./node_modules/nativescript-ui-core/android.d.ts" />
/// <reference path="./node_modules/nativescript-ui-autocomplete/android.d.ts" />

declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export class BuildConfig {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
import orgjsonJSONArray = org.json.JSONArray;
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyMetadata.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.CommitMode.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.ValidationMode.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class DataFormMetadata {
						public putMetadataForProperty(param0: string, param1: com.telerik.widget.dataform.engine.EntityPropertyMetadata): void;
						public constructor();
						public constructor(param0: orgjsonJSONObject);
						public constructor(param0: orgjsonJSONArray);
						public setIsReadOnly(param0: boolean): void;
						public setValidationMode(param0: com.telerik.widget.dataform.visualization.core.ValidationMode): void;
						public getMetadataForProperty(param0: string): com.telerik.widget.dataform.engine.EntityPropertyMetadata;
						public isReadOnly(): boolean;
						public getCommitMode(): com.telerik.widget.dataform.visualization.core.CommitMode;
						public setCommitMode(param0: com.telerik.widget.dataform.visualization.core.CommitMode): void;
						public getValidationMode(): com.telerik.widget.dataform.visualization.core.ValidationMode;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyViewer.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EditorSetupListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.EditorSetupListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onEditorSetupStarted(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyViewer): void;
							onEditorSetupFinished(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyViewer): void;
						});
						public onEditorSetupStarted(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyViewer): void;
						public onEditorSetupFinished(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyViewer): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EmptyConverter {
						public constructor();
						public convertTo(param0: javalangObject): javalangObject;
						public convertFrom(param0: javalangObject): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EmptyValidator extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public getPositiveMessage(): string;
						public constructor();
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public setNegativeMessage(param0: string): void;
						public setPositiveMessage(param0: string): void;
						public getNegativeMessage(): string;
					}
				}
			}
		}
	}
}

import javalangIterable = java.lang.Iterable;
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyCommitListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyValidationListener.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class Entity {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.Entity interface with the provided implementation.
						 */
						public constructor(implementation: {
							setProperty(param0: com.telerik.widget.dataform.engine.EntityProperty, param1: javalangObject): void;
							getProperty(param0: com.telerik.widget.dataform.engine.EntityProperty): javalangObject;
							properties(): javalangIterable<javalangObject>;
							getSourceObject(): javalangObject;
							addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
							removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
							addValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
							removeValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
							notifyCommitListenersBefore(param0: com.telerik.widget.dataform.engine.EntityProperty): boolean;
							notifyCommitListenersAfter(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
							notifyValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
							notifyDidValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						});
						public removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public getProperty(param0: com.telerik.widget.dataform.engine.EntityProperty): javalangObject;
						public addValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
						public addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public setProperty(param0: com.telerik.widget.dataform.engine.EntityProperty, param1: javalangObject): void;
						public notifyDidValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public notifyCommitListenersAfter(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public removeValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
						public properties(): javalangIterable<javalangObject>;
						public getSourceObject(): javalangObject;
						public notifyCommitListenersBefore(param0: com.telerik.widget.dataform.engine.EntityProperty): boolean;
						public notifyValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
					}
				}
			}
		}
	}
}

import javautilLinkedHashMap = java.util.LinkedHashMap;
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyCommitListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyValidationListener.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.LinkedHashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EntityBase extends com.telerik.widget.dataform.engine.EntityCore {
						public sourceObject: javalangObject;
						public reflectionCache: javautilHashMap<javalangObject,javalangObject>;
						public constructor(param0: javalangObject);
						public constructor();
						public getProperty(param0: com.telerik.widget.dataform.engine.EntityProperty): javalangObject;
						public addValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
						public addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public setProperty(param0: com.telerik.widget.dataform.engine.EntityProperty, param1: javalangObject): void;
						public notifyCommitListenersAfter(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public properties(): javalangIterable<javalangObject>;
						public getSourceObject(): javalangObject;
						public notifyCommitListenersBefore(param0: com.telerik.widget.dataform.engine.EntityProperty): boolean;
						public notifyValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public initializePropertyMap(): void;
						public removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public createProperty(param0: string, param1: javalangObject): com.telerik.widget.dataform.engine.EntityProperty;
						public resolveCoreProperties(param0: javalangClass<javalangObject>): javautilLinkedHashMap<javalangObject,javalangObject>;
						public notifyDidValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public removeValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyCommitListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyValidationListener.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export abstract class EntityCore {
						public constructor();
						public getProperty(param0: com.telerik.widget.dataform.engine.EntityProperty): javalangObject;
						public addValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
						public addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public setProperty(param0: com.telerik.widget.dataform.engine.EntityProperty, param1: javalangObject): void;
						public notifyCommitListenersAfter(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public properties(): javalangIterable<javalangObject>;
						public getSourceObject(): javalangObject;
						public notifyCommitListenersBefore(param0: com.telerik.widget.dataform.engine.EntityProperty): boolean;
						public notifyValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public notifyDidValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public removeValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EntityProperties {
						public setPropertyMode(param0: com.telerik.widget.dataform.engine.EntityProperties.PropertyResolutionMode): void;
						public constructor();
						public getPropertyMode(): com.telerik.widget.dataform.engine.EntityProperties.PropertyResolutionMode;
					}
					export module EntityProperties {
						export class PropertyResolutionMode {
							public static All: com.telerik.widget.dataform.engine.EntityProperties.PropertyResolutionMode;
							public static Getters: com.telerik.widget.dataform.engine.EntityProperties.PropertyResolutionMode;
							public static values(): native.Array<com.telerik.widget.dataform.engine.EntityProperties.PropertyResolutionMode>;
							public static valueOf(param0: string): com.telerik.widget.dataform.engine.EntityProperties.PropertyResolutionMode;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.Entity.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyChangedListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyCommitListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyMetadata.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.PropertyConverter.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.PropertyValidator.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EntityProperty extends javalangObject {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.EntityProperty interface with the provided implementation.
						 */
						public constructor(implementation: {
							setCustomMetadata(param0: javalangObject): void;
							getCustomMetadata(): javalangObject;
							setReadOnly(param0: boolean): void;
							getReadOnly(): boolean;
							getEditorLayoutId(): number;
							setEditorLayoutId(param0: number): void;
							getCoreEditorLayoutId(): number;
							setCoreEditorLayoutId(param0: number): void;
							getHeaderLayoutId(): number;
							setHeaderLayoutId(param0: number): void;
							getValidationLayoutId(): number;
							setValidationLayoutId(param0: number): void;
							getEnumConstants(): native.Array<javalangObject>;
							isTypePrimitive(): boolean;
							readMetadata(param0: com.telerik.widget.dataform.engine.EntityPropertyMetadata): void;
							getViewerType(): javalangClass<javalangObject>;
							setViewerType(param0: javalangClass<javalangObject>): void;
							getEditorType(): javalangClass<javalangObject>;
							setEditorType(param0: javalangClass<javalangObject>): void;
							getEditorParams(): javautilHashMap<javalangObject,javalangObject>;
							setEditorParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
							getSkip(): boolean;
							setSkip(param0: boolean): void;
							setColumnPosition(param0: number): void;
							getColumnPosition(): number;
							getColumnSpan(): number;
							setColumnSpan(param0: number): void;
							getPosition(): number;
							setPosition(param0: number): void;
							getHeader(): string;
							setHeader(param0: string): void;
							getImageResource(): number;
							setImageResource(param0: number): void;
							getGroupName(): string;
							setGroupName(param0: string): void;
							getHintText(): string;
							setHintText(param0: string): void;
							getRequired(): boolean;
							setRequired(param0: boolean): void;
							addOnChangedListener(param0: com.telerik.widget.dataform.engine.EntityPropertyChangedListener): void;
							removeOnChangedListener(param0: com.telerik.widget.dataform.engine.EntityPropertyChangedListener): void;
							addValidationCompletedListener(param0: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
							onValidationStarted(): void;
							onValidationResult(value: javalangObject, result: boolean, message: string): void;
							removeValidationCompletedListener(param0: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
							addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
							removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
							type(): javalangClass<javalangObject>;
							name(): string;
							getValueCandidate(): javalangObject;
							setValueCandidate(param0: javalangObject): void;
							getOwner(): com.telerik.widget.dataform.engine.Entity;
							getValue(): javalangObject;
							commit(): void;
							tryCommit(param0: javalangObject): void;
							setConverter(param0: com.telerik.widget.dataform.engine.PropertyConverter): void;
							getConverter(): com.telerik.widget.dataform.engine.PropertyConverter;
							setValidator(param0: com.telerik.widget.dataform.engine.PropertyValidator): void;
							getValidator(): com.telerik.widget.dataform.engine.PropertyValidator;
							validate(param0: javalangObject): void;
							isValid(): boolean;
							updateValues(param0: native.Array<javalangObject>): void;
						});
						public setEditorLayoutId(param0: number): void;
						public addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public getRequired(): boolean;
						public getViewerType(): javalangClass<javalangObject>;
						public getCoreEditorLayoutId(): number;
						public setValueCandidate(param0: javalangObject): void;
						public getEditorParams(): javautilHashMap<javalangObject,javalangObject>;
						public getValue(): javalangObject;
						public setSkip(param0: boolean): void;
						public getValidator(): com.telerik.widget.dataform.engine.PropertyValidator;
						public setEditorType(param0: javalangClass<javalangObject>): void;
						public addOnChangedListener(param0: com.telerik.widget.dataform.engine.EntityPropertyChangedListener): void;
						public getReadOnly(): boolean;
						public getPosition(): number;
						public setGroupName(param0: string): void;
						public updateValues(param0: native.Array<javalangObject>): void;
						public addValidationCompletedListener(param0: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public onValidationStarted(): void;
						public onValidationResult(value: javalangObject, result: boolean, message: string): void;
						public setValidator(param0: com.telerik.widget.dataform.engine.PropertyValidator): void;
						public getHeader(): string;
						public isTypePrimitive(): boolean;
						public setPosition(param0: number): void;
						public setHeader(param0: string): void;
						public setViewerType(param0: javalangClass<javalangObject>): void;
						public setCustomMetadata(param0: javalangObject): void;
						public removeValidationCompletedListener(param0: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public getImageResource(): number;
						public readMetadata(param0: com.telerik.widget.dataform.engine.EntityPropertyMetadata): void;
						public getEditorLayoutId(): number;
						public name(): string;
						public getGroupName(): string;
						public type(): javalangClass<javalangObject>;
						public setValidationLayoutId(param0: number): void;
						public setCoreEditorLayoutId(param0: number): void;
						public getEnumConstants(): native.Array<javalangObject>;
						public setEditorParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public setImageResource(param0: number): void;
						public getConverter(): com.telerik.widget.dataform.engine.PropertyConverter;
						public setReadOnly(param0: boolean): void;
						public getValidationLayoutId(): number;
						public getEditorType(): javalangClass<javalangObject>;
						public getColumnSpan(): number;
						public setColumnPosition(param0: number): void;
						public validate(param0: javalangObject): void;
						public getColumnPosition(): number;
						public commit(): void;
						public setRequired(param0: boolean): void;
						public getValueCandidate(): javalangObject;
						public setColumnSpan(param0: number): void;
						public setConverter(param0: com.telerik.widget.dataform.engine.PropertyConverter): void;
						public tryCommit(param0: javalangObject): void;
						public setHeaderLayoutId(param0: number): void;
						public isValid(): boolean;
						public removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public getHeaderLayoutId(): number;
						public getCustomMetadata(): javalangObject;
						public setHintText(param0: string): void;
						public getSkip(): boolean;
						public getOwner(): com.telerik.widget.dataform.engine.Entity;
						public getHintText(): string;
						public removeOnChangedListener(param0: com.telerik.widget.dataform.engine.EntityPropertyChangedListener): void;
					}
				}
			}
		}
	}
}

import javalangreflectMethod = java.lang.reflect.Method;
/// <reference path="./com.telerik.widget.dataform.engine.Entity.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyChangedListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyCommitListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyMetadata.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.PropertyConverter.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.PropertyValidator.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.annotations.DataFormProperty.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EntityPropertyBase extends com.telerik.widget.dataform.engine.EntityPropertyCore {
						public readMetadata(param0: string, param1: com.telerik.widget.dataform.engine.Entity): void;
						public setEditorLayoutId(param0: number): void;
						public addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public getRequired(): boolean;
						public onPropertyChanged(param0: string, param1: javalangObject): void;
						public getViewerType(): javalangClass<javalangObject>;
						public getCoreEditorLayoutId(): number;
						public setValueCandidate(param0: javalangObject): void;
						public getEditorParams(): javautilHashMap<javalangObject,javalangObject>;
						public getValue(): javalangObject;
						public setSkip(param0: boolean): void;
						public getValidator(): com.telerik.widget.dataform.engine.PropertyValidator;
						public setEditorType(param0: javalangClass<javalangObject>): void;
						public addOnChangedListener(param0: com.telerik.widget.dataform.engine.EntityPropertyChangedListener): void;
						public getReadOnly(): boolean;
						public getPosition(): number;
						public setGroupName(param0: string): void;
						public findMetadata(param0: javalangreflectMethod): com.telerik.widget.dataform.visualization.annotations.DataFormProperty;
						public updateValues(param0: native.Array<javalangObject>): void;
						public addValidationCompletedListener(param0: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public setValidator(param0: com.telerik.widget.dataform.engine.PropertyValidator): void;
						public getHeader(): string;
						public onValidationStarted(): void;
						public onValidationResult(value: javalangObject, result: boolean, message: string): void;
						public isTypePrimitive(): boolean;
						public setPosition(param0: number): void;
						public setHeader(param0: string): void;
						public setViewerType(param0: javalangClass<javalangObject>): void;
						public setCustomMetadata(param0: javalangObject): void;
						public removeValidationCompletedListener(param0: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public getImageResource(): number;
						public readMetadata(param0: com.telerik.widget.dataform.engine.EntityPropertyMetadata): void;
						public getEditorLayoutId(): number;
						public name(): string;
						public getGroupName(): string;
						public type(): javalangClass<javalangObject>;
						public setValidationLayoutId(param0: number): void;
						public setCoreEditorLayoutId(param0: number): void;
						public getEnumConstants(): native.Array<javalangObject>;
						public setEditorParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public setImageResource(param0: number): void;
						public getConverter(): com.telerik.widget.dataform.engine.PropertyConverter;
						public setReadOnly(param0: boolean): void;
						public getValidationLayoutId(): number;
						public getEditorType(): javalangClass<javalangObject>;
						public getColumnSpan(): number;
						public setColumnPosition(param0: number): void;
						public validate(param0: javalangObject): void;
						public getColumnPosition(): number;
						public commit(): void;
						public setRequired(param0: boolean): void;
						public getValueCandidate(): javalangObject;
						public constructor(param0: string, param1: javalangClass<javalangObject>, param2: com.telerik.widget.dataform.engine.Entity);
						public setColumnSpan(param0: number): void;
						public setConverter(param0: com.telerik.widget.dataform.engine.PropertyConverter): void;
						public tryCommit(param0: javalangObject): void;
						public setHeaderLayoutId(param0: number): void;
						public isValid(): boolean;
						public removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public getHeaderLayoutId(): number;
						public getCustomMetadata(): javalangObject;
						public findMethod(param0: string, param1: string, param2: javalangClass<javalangObject>): javalangreflectMethod;
						public setHintText(param0: string): void;
						public getSkip(): boolean;
						public getOwner(): com.telerik.widget.dataform.engine.Entity;
						public getHintText(): string;
						public removeOnChangedListener(param0: com.telerik.widget.dataform.engine.EntityPropertyChangedListener): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EntityPropertyChangedListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.EntityPropertyChangedListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onChanged(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						});
						public onChanged(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EntityPropertyCommitListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.EntityPropertyCommitListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onBeforeCommit(param0: com.telerik.widget.dataform.engine.EntityProperty): boolean;
							onAfterCommit(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						});
						public onBeforeCommit(param0: com.telerik.widget.dataform.engine.EntityProperty): boolean;
						public onAfterCommit(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.Entity.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyChangedListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyCommitListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyMetadata.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.PropertyConverter.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.PropertyValidator.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.annotations.DataFormProperty.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.reflect.Method.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export abstract class EntityPropertyCore {
						public readMetadata(param0: string, param1: com.telerik.widget.dataform.engine.Entity): void;
						public setEditorLayoutId(param0: number): void;
						public addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public getRequired(): boolean;
						public onPropertyChanged(param0: string, param1: javalangObject): void;
						public getViewerType(): javalangClass<javalangObject>;
						public getCoreEditorLayoutId(): number;
						public setValueCandidate(param0: javalangObject): void;
						public getEditorParams(): javautilHashMap<javalangObject,javalangObject>;
						public notifyValidate(): void;
						public getValue(): javalangObject;
						public setSkip(param0: boolean): void;
						public notifyCommitListenersAfter(): void;
						public getValidator(): com.telerik.widget.dataform.engine.PropertyValidator;
						public setEditorType(param0: javalangClass<javalangObject>): void;
						public addOnChangedListener(param0: com.telerik.widget.dataform.engine.EntityPropertyChangedListener): void;
						public getReadOnly(): boolean;
						public getPosition(): number;
						public setGroupName(param0: string): void;
						public findMetadata(param0: javalangreflectMethod): com.telerik.widget.dataform.visualization.annotations.DataFormProperty;
						public updateValues(param0: native.Array<javalangObject>): void;
						public addValidationCompletedListener(param0: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public setValidator(param0: com.telerik.widget.dataform.engine.PropertyValidator): void;
						public getHeader(): string;
						public isTypePrimitive(): boolean;
						public notifyCommitListenersBefore(): boolean;
						public setPosition(param0: number): void;
						public setHeader(param0: string): void;
						public setViewerType(param0: javalangClass<javalangObject>): void;
						public setCustomMetadata(param0: javalangObject): void;
						public removeValidationCompletedListener(param0: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public getImageResource(): number;
						public readMetadata(param0: com.telerik.widget.dataform.engine.EntityPropertyMetadata): void;
						public getEditorLayoutId(): number;
						public name(): string;
						public notifyDidValidate(): void;
						public getGroupName(): string;
						public type(): javalangClass<javalangObject>;
						public setValidationLayoutId(param0: number): void;
						public getEnumConstants(): native.Array<javalangObject>;
						public setCoreEditorLayoutId(param0: number): void;
						public setEditorParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public setImageResource(param0: number): void;
						public getConverter(): com.telerik.widget.dataform.engine.PropertyConverter;
						public setReadOnly(param0: boolean): void;
						public getValidationLayoutId(): number;
						public getEditorType(): javalangClass<javalangObject>;
						public getColumnSpan(): number;
						public setColumnPosition(param0: number): void;
						public validate(param0: javalangObject): void;
						public onValidationStarted(): void;
						public getColumnPosition(): number;
						public commit(): void;
						public setRequired(param0: boolean): void;
						public onValidationResult(param0: javalangObject, param1: boolean, param2: string): void;
						public getValueCandidate(): javalangObject;
						public constructor(param0: string, param1: javalangClass<javalangObject>, param2: com.telerik.widget.dataform.engine.Entity);
						public setColumnSpan(param0: number): void;
						public setConverter(param0: com.telerik.widget.dataform.engine.PropertyConverter): void;
						public tryCommit(param0: javalangObject): void;
						public setHeaderLayoutId(param0: number): void;
						public isValid(): boolean;
						public removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public notifyValidationListeners(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
						public getHeaderLayoutId(): number;
						public getCustomMetadata(): javalangObject;
						public findMethod(param0: string, param1: string, param2: javalangClass<javalangObject>): javalangreflectMethod;
						public setHintText(param0: string): void;
						public getSkip(): boolean;
						public notifyChangedListeners(): void;
						public headerFormat(param0: string): string;
						public getOwner(): com.telerik.widget.dataform.engine.Entity;
						public getHintText(): string;
						public removeOnChangedListener(param0: com.telerik.widget.dataform.engine.EntityPropertyChangedListener): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyEditor.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EntityPropertyEditorChangeListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.EntityPropertyEditorChangeListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onEditorChanged(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor): void;
						});
						public onEditorChanged(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.Procedure2.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyEditor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EntityPropertyEditorDependency {
						public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: string, param2: com.telerik.android.common.Procedure2, param3: native.Array<string>);
						public unload(): void;
						public onEditorChanged(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor): void;
						public load(): void;
						public update(): void;
						public editorName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.PropertyConverter.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.PropertyValidator.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.annotations.DataFormProperty.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EntityPropertyMetadata {
						public setCustomMetadata(param0: javalangObject): void;
						public constructor(param0: com.telerik.widget.dataform.visualization.annotations.DataFormProperty);
						public setEditorLayoutId(param0: number): void;
						public getImageResource(): number;
						public setValues(param0: javautilArrayList<javalangObject>): void;
						public getEditorLayoutId(): number;
						public getRequired(): boolean;
						public getGroupName(): string;
						public setValidationLayoutId(param0: number): void;
						public getViewerType(): javalangClass<javalangObject>;
						public getValidatorParams(): javautilHashMap<javalangObject,javalangObject>;
						public setCoreEditorLayoutId(param0: number): void;
						public setEditorParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public getCoreEditorLayoutId(): number;
						public setImageResource(param0: number): void;
						public getConverter(): com.telerik.widget.dataform.engine.PropertyConverter;
						public setReadOnly(param0: boolean): void;
						public getEditorParams(): javautilHashMap<javalangObject,javalangObject>;
						public getValidationLayoutId(): number;
						public getEditorType(): javalangClass<javalangObject>;
						public getColumnSpan(): number;
						public setSkip(param0: boolean): void;
						public setColumnPosition(param0: number): void;
						public getValidator(): com.telerik.widget.dataform.engine.PropertyValidator;
						public constructor();
						public setEditorType(param0: javalangClass<javalangObject>): void;
						public getColumnPosition(): number;
						public getReadOnly(): boolean;
						public getPosition(): number;
						public setGroupName(param0: string): void;
						public setRequired(param0: boolean): void;
						public setColumnSpan(param0: number): void;
						public setConverter(param0: com.telerik.widget.dataform.engine.PropertyConverter): void;
						public setValidatorParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public setHeaderLayoutId(param0: number): void;
						public getValues(): javautilArrayList<javalangObject>;
						public setValidator(param0: com.telerik.widget.dataform.engine.PropertyValidator): void;
						public getHeaderLayoutId(): number;
						public getHeader(): string;
						public getCustomMetadata(): javalangObject;
						public setHintText(param0: string): void;
						public getSkip(): boolean;
						public setPosition(param0: number): void;
						public setHeader(param0: string): void;
						public setViewerType(param0: javalangClass<javalangObject>): void;
						public getHintText(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class EntityPropertyValidationListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.EntityPropertyValidationListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
							onDidValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						});
						public onDidValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public onValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class IsTrueValidator extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public getPositiveMessage(): string;
						public constructor();
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public setNegativeMessage(param0: string): void;
						public setPositiveMessage(param0: string): void;
						public getNegativeMessage(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyCommitListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyValidationListener.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class JsonEntity extends com.telerik.widget.dataform.engine.EntityCore {
						public constructor();
						public getProperty(param0: com.telerik.widget.dataform.engine.EntityProperty): javalangObject;
						public addValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
						public constructor(param0: orgjsonJSONObject);
						public addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public setProperty(param0: com.telerik.widget.dataform.engine.EntityProperty, param1: javalangObject): void;
						public notifyCommitListenersAfter(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public getSourceObject(): javalangObject;
						public properties(): javalangIterable<javalangObject>;
						public notifyCommitListenersBefore(param0: com.telerik.widget.dataform.engine.EntityProperty): boolean;
						public notifyValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public notifyDidValidate(param0: com.telerik.widget.dataform.engine.EntityProperty): void;
						public removeValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.Entity.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyChangedListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyCommitListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyMetadata.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.PropertyConverter.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.PropertyValidator.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class JsonEntityProperty extends com.telerik.widget.dataform.engine.EntityPropertyCore {
						public setEditorLayoutId(param0: number): void;
						public readMetadata(param0: string, param1: com.telerik.widget.dataform.engine.Entity): void;
						public addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public getRequired(): boolean;
						public onPropertyChanged(param0: string, param1: javalangObject): void;
						public getViewerType(): javalangClass<javalangObject>;
						public setValueCandidate(param0: javalangObject): void;
						public getCoreEditorLayoutId(): number;
						public getEditorParams(): javautilHashMap<javalangObject,javalangObject>;
						public getValue(): javalangObject;
						public setSkip(param0: boolean): void;
						public getValidator(): com.telerik.widget.dataform.engine.PropertyValidator;
						public setEditorType(param0: javalangClass<javalangObject>): void;
						public addOnChangedListener(param0: com.telerik.widget.dataform.engine.EntityPropertyChangedListener): void;
						public getReadOnly(): boolean;
						public getPosition(): number;
						public setGroupName(param0: string): void;
						public updateValues(param0: native.Array<javalangObject>): void;
						public addValidationCompletedListener(param0: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public setValidator(param0: com.telerik.widget.dataform.engine.PropertyValidator): void;
						public getHeader(): string;
						public onValidationStarted(): void;
						public onValidationResult(value: javalangObject, result: boolean, message: string): void;
						public isTypePrimitive(): boolean;
						public setPosition(param0: number): void;
						public setHeader(param0: string): void;
						public setViewerType(param0: javalangClass<javalangObject>): void;
						public setCustomMetadata(param0: javalangObject): void;
						public removeValidationCompletedListener(param0: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public getImageResource(): number;
						public readMetadata(param0: com.telerik.widget.dataform.engine.EntityPropertyMetadata): void;
						public getEditorLayoutId(): number;
						public name(): string;
						public getGroupName(): string;
						public type(): javalangClass<javalangObject>;
						public setValidationLayoutId(param0: number): void;
						public setCoreEditorLayoutId(param0: number): void;
						public getEnumConstants(): native.Array<javalangObject>;
						public setEditorParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public setImageResource(param0: number): void;
						public getConverter(): com.telerik.widget.dataform.engine.PropertyConverter;
						public setReadOnly(param0: boolean): void;
						public getValidationLayoutId(): number;
						public getEditorType(): javalangClass<javalangObject>;
						public getColumnSpan(): number;
						public setColumnPosition(param0: number): void;
						public validate(param0: javalangObject): void;
						public getColumnPosition(): number;
						public commit(): void;
						public setRequired(param0: boolean): void;
						public getValueCandidate(): javalangObject;
						public constructor(param0: string, param1: javalangClass<javalangObject>, param2: com.telerik.widget.dataform.engine.Entity);
						public setColumnSpan(param0: number): void;
						public setConverter(param0: com.telerik.widget.dataform.engine.PropertyConverter): void;
						public tryCommit(param0: javalangObject): void;
						public setHeaderLayoutId(param0: number): void;
						public isValid(): boolean;
						public removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public getHeaderLayoutId(): number;
						public getCustomMetadata(): javalangObject;
						public setHintText(param0: string): void;
						public getSkip(): boolean;
						public headerFormat(param0: string): string;
						public getOwner(): com.telerik.widget.dataform.engine.Entity;
						public getHintText(): string;
						public removeOnChangedListener(param0: com.telerik.widget.dataform.engine.EntityPropertyChangedListener): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class LabelPosition {
						public static TOP: com.telerik.widget.dataform.engine.LabelPosition;
						public static LEFT: com.telerik.widget.dataform.engine.LabelPosition;
						public static valueOf(param0: string): com.telerik.widget.dataform.engine.LabelPosition;
						public static values(): native.Array<com.telerik.widget.dataform.engine.LabelPosition>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class MailValidator extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public getPositiveMessage(): string;
						public constructor();
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public setNegativeMessage(param0: string): void;
						public setPositiveMessage(param0: string): void;
						public getNegativeMessage(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class MaximumLengthValidator extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public getPositiveMessage(): string;
						public constructor();
						public applyParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public setMaximumLength(param0: number): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public getMaximumLength(): number;
						public setNegativeMessage(param0: string): void;
						public getNegativeMessage(): string;
						public setPositiveMessage(param0: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class MinimumLengthValidator extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public getMinimumLength(): number;
						public getPositiveMessage(): string;
						public constructor();
						public setMinimumLength(param0: number): void;
						public applyParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public setNegativeMessage(param0: string): void;
						public getNegativeMessage(): string;
						public setPositiveMessage(param0: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class NonEmptyValidator extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public getPositiveMessage(): string;
						public constructor();
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public setNegativeMessage(param0: string): void;
						public setPositiveMessage(param0: string): void;
						public getNegativeMessage(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.PropertyChangedListener.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class NotifyPropertyChanged {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.NotifyPropertyChanged interface with the provided implementation.
						 */
						public constructor(implementation: {
							addPropertyChangedListener(param0: com.telerik.widget.dataform.engine.PropertyChangedListener): void;
							removePropertyChangedListener(param0: com.telerik.widget.dataform.engine.PropertyChangedListener): void;
						});
						public removePropertyChangedListener(param0: com.telerik.widget.dataform.engine.PropertyChangedListener): void;
						public addPropertyChangedListener(param0: com.telerik.widget.dataform.engine.PropertyChangedListener): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.PropertyChangedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class NotifyPropertyChangedBase {
						public constructor();
						public notifyListeners(param0: string, param1: javalangObject): void;
						public removePropertyChangedListener(param0: com.telerik.widget.dataform.engine.PropertyChangedListener): void;
						public addPropertyChangedListener(param0: com.telerik.widget.dataform.engine.PropertyChangedListener): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class PhoneValidator extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public getPositiveMessage(): string;
						public constructor();
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public setNegativeMessage(param0: string): void;
						public setPositiveMessage(param0: string): void;
						public getNegativeMessage(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class PropertyChangedListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.PropertyChangedListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onPropertyChanged(param0: string, param1: javalangObject): void;
						});
						public onPropertyChanged(param0: string, param1: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class PropertyConverter {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.PropertyConverter interface with the provided implementation.
						 */
						public constructor(implementation: {
							convertTo(param0: javalangObject): javalangObject;
							convertFrom(param0: javalangObject): javalangObject;
						});
						public convertTo(param0: javalangObject): javalangObject;
						public convertFrom(param0: javalangObject): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class PropertyValidator {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.PropertyValidator interface with the provided implementation.
						 */
						public constructor(implementation: {
							validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
							getPositiveMessage(): string;
							setPositiveMessage(param0: string): void;
							getNegativeMessage(): string;
							setNegativeMessage(param0: string): void;
						});
						public getPositiveMessage(): string;
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public setNegativeMessage(param0: string): void;
						public setPositiveMessage(param0: string): void;
						public getNegativeMessage(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export abstract class PropertyValidatorBase {
						public getPositiveMessage(): string;
						public constructor();
						public applyParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public setNegativeMessage(param0: string): void;
						public setPositiveMessage(param0: string): void;
						public getNegativeMessage(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class PropertyValidatorManual extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public getPositiveMessage(): string;
						public getValidationProvider(): com.telerik.widget.dataform.engine.PropertyValidatorManual.ValidationProvider;
						public constructor();
						public setValidationProvider(param0: com.telerik.widget.dataform.engine.PropertyValidatorManual.ValidationProvider): void;
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public setNegativeMessage(param0: string): void;
						public setPositiveMessage(param0: string): void;
						public getNegativeMessage(): string;
					}
					export module PropertyValidatorManual {
						export class ValidationProvider {
							/**
							 * Constructs a new instance of the com.telerik.widget.dataform.engine.PropertyValidatorManual$ValidationProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								validate(param0: javalangObject, param1: string): boolean;
							});
							public validate(param0: javalangObject, param1: string): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.PropertyValidatorBase.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class PropertyValidatorSet extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public remove(param0: com.telerik.widget.dataform.engine.PropertyValidatorBase): void;
						public getPositiveMessage(): string;
						public constructor();
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validators(): javautilArrayList<javalangObject>;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public clear(): void;
						public setNegativeMessage(param0: string): void;
						public add(param0: com.telerik.widget.dataform.engine.PropertyValidatorBase): void;
						public setPositiveMessage(param0: string): void;
						public getNegativeMessage(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class RangeValidator extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public getPositiveMessage(): string;
						public constructor();
						public applyParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public setMin(param0: number): void;
						public setMax(param0: number): void;
						public getMin(): number;
						public getNegativeMessage(): string;
						public setPositiveMessage(param0: string): void;
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public setNegativeMessage(param0: string): void;
						public constructor(param0: number, param1: number);
						public getMax(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationCompletedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class RegExValidator extends com.telerik.widget.dataform.engine.PropertyValidatorBase {
						public getPositiveMessage(): string;
						public getRegEx(): string;
						public constructor();
						public applyParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
						public validate(param0: javalangObject, param1: string, param2: com.telerik.widget.dataform.engine.ValidationCompletedListener): void;
						public validateCore(param0: javalangObject, param1: string): boolean;
						public setNegativeMessage(param0: string): void;
						public setRegEx(param0: string): void;
						public setPositiveMessage(param0: string): void;
						public getNegativeMessage(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class StringToDateConverter extends com.telerik.widget.dataform.engine.StringToLongConverter {
						public constructor();
						public convertFrom(param0: javalangObject): javalangObject;
						public convertTo(param0: javalangObject): javalangObject;
					}
				}
			}
		}
	}
}

import javatextSimpleDateFormat = java.text.SimpleDateFormat;
import javautilLocale = java.util.Locale;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.SimpleDateFormat.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export abstract class StringToLongConverter {
						public constructor();
						public getTemplate(): string;
						public setTemplate(param0: string): void;
						public format(): javatextSimpleDateFormat;
						public convertFrom(param0: javalangObject): javalangObject;
						public convertTo(param0: javalangObject): javalangObject;
						public getLocale(): javautilLocale;
						public setLocale(param0: javautilLocale): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class StringToTimeConverter extends com.telerik.widget.dataform.engine.StringToLongConverter {
						public constructor();
						public convertFrom(param0: javalangObject): javalangObject;
						public convertTo(param0: javalangObject): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class ValidationCompletedListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.dataform.engine.ValidationCompletedListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
						});
						public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module engine {
					export class ValidationInfo {
						public message(): string;
						public editorValue(): javalangObject;
						public propertyName(): string;
						public constructor(param0: boolean, param1: string, param2: string, param3: javalangObject);
						public isValid(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.Entity.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.registries.EditorRegistry.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class DataFormEntityAdapter {
						public setEditorProvider(param0: com.telerik.android.common.Function): void;
						public getViewersForEntity(param0: com.telerik.widget.dataform.engine.Entity): javalangIterable<javalangObject>;
						public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm);
						public getEditorsForEntity(param0: com.telerik.widget.dataform.engine.Entity): javalangIterable<javalangObject>;
						public setViewerProvider(param0: com.telerik.android.common.Function): void;
						public getEditorRegistry(): com.telerik.widget.dataform.visualization.registries.EditorRegistry;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.android.common.Function2.d.ts" />
/// <reference path="./com.telerik.android.common.Procedure.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.EditorGroup.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class DataFormGroupLayoutManager extends com.telerik.widget.dataform.visualization.DataFormLayoutManager {
						public constructor(param0: androidcontentContext, param1: number);
						public arrangeEditorsCore(param0: javalangIterable<javalangObject>, param1: androidviewViewGroup): void;
						public createEditorGroup(param0: string): com.telerik.widget.dataform.visualization.EditorGroup;
						public groupEditors(param0: javalangIterable<javalangObject>): javautilList<javalangObject>;
						public getEditorGroupCustomizations(): com.telerik.android.common.Procedure;
						public applyEditorGroupCustomizations(): void;
						public setCreateGroup(param0: com.telerik.android.common.Function2): void;
						public setEditorGroupCustomizations(param0: com.telerik.android.common.Procedure): void;
						public getCreateGroup(): com.telerik.android.common.Function2;
						public editorGroups(): javautilList<any>;
						public constructor(param0: androidcontentContext);
						public getSortGroups(): com.telerik.android.common.Procedure;
						public setSortGroups(param0: com.telerik.android.common.Procedure): void;
						public arrangeGroups(param0: javautilCollection<javalangObject>, param1: androidviewViewGroup): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export abstract class DataFormLayoutManager {
						public context: androidcontentContext;
						public arrangeEditors(param0: javalangIterable<javalangObject>): androidviewViewGroup;
						public unload(): void;
						public constructor(param0: androidcontentContext, param1: number);
						public arrangeEditorsCore(param0: javalangIterable<javalangObject>, param1: androidviewViewGroup): void;
						public updateEditorsFocusOrder(param0: javalangIterable<javalangObject>): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class DataFormLinearLayoutManager extends com.telerik.widget.dataform.visualization.DataFormLayoutManager {
						public constructor(param0: androidcontentContext, param1: number);
						public arrangeEditorsCore(param0: javalangIterable<javalangObject>, param1: androidviewViewGroup): void;
						public constructor(param0: androidcontentContext);
						public setOrientation(param0: number): void;
						public getOrientation(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class DataFormPlaceholderLayoutManager extends com.telerik.widget.dataform.visualization.DataFormLayoutManager {
						public findPlaceHolder(param0: javalangObject, param1: androidviewViewGroup): androidviewViewGroup;
						public constructor(param0: androidcontentContext, param1: number);
						public arrangeEditorsCore(param0: javalangIterable<javalangObject>, param1: androidviewViewGroup): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyEditor.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class DataFormPositiveValidationViewBehavior extends com.telerik.widget.dataform.visualization.DataFormValidationViewBehavior {
						public validDrawable: androidgraphicsdrawableDrawable;
						public validBackgroundDrawable: androidgraphicsdrawableDrawable;
						public validTextColor: number;
						public setValidBackgroundDrawable(param0: number): void;
						public hideNegativeFeedback(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
						public showPositiveFeedback(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
						public getValidDrawable(): androidgraphicsdrawableDrawable;
						public setValidTextColor(param0: number): void;
						public setValidDrawable(param0: number): void;
						public setValidBackgroundDrawable(param0: androidgraphicsdrawableDrawable): void;
						public setValidDrawable(param0: androidgraphicsdrawableDrawable): void;
						public onValidationEvent(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor, param1: com.telerik.widget.dataform.engine.ValidationInfo): void;
						public getValidBackgroundDrawable(): androidgraphicsdrawableDrawable;
						public hideNegativeFeedback(): void;
						public updateViewBackground(param0: androidviewView, param1: boolean): void;
						public constructor(param0: androidcontentContext);
						public getValidTextColor(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class DataFormTableLayoutManager extends com.telerik.widget.dataform.visualization.DataFormLayoutManager {
						public unload(): void;
						public constructor(param0: androidcontentContext, param1: number);
						public arrangeEditorsCore(param0: javalangIterable<javalangObject>, param1: androidviewViewGroup): void;
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class DataFormValidationInfo extends javalangObject {
						public constructor(param0: javautilList<javalangObject>);
						public failedValidationInfos(): javautilList<javalangObject>;
						public hasErrors(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.EditText.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyEditor.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class DataFormValidationViewBehavior {
						public editor: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor;
						public negativeFeedbackVisible: boolean;
						public invalidDrawable: androidgraphicsdrawableDrawable;
						public invalidBackgroundDrawable: androidgraphicsdrawableDrawable;
						public invalidTextColor: number;
						public setEditor(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor): void;
						public findMessageView(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor): androidwidgetTextView;
						public setInvalidTextColor(param0: number): void;
						public setChangeBackground(param0: boolean): void;
						public setInvalidDrawable(param0: number): void;
						public setInvalidBackgroundDrawable(param0: androidgraphicsdrawableDrawable): void;
						public getInvalidTextColor(): number;
						public onValidationEvent(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor, param1: com.telerik.widget.dataform.engine.ValidationInfo): void;
						public showNegativeFeedback(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
						public getContext(): androidcontentContext;
						public updateViewBackground(param0: androidviewView, param1: boolean): void;
						public getInvalidDrawable(): androidgraphicsdrawableDrawable;
						public hideNegativeFeedback(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
						public validationIcon(): androidwidgetImageView;
						public setInvalidBackgroundDrawable(param0: number): void;
						public updateUI(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
						public messageView(): androidwidgetTextView;
						public getEditor(): com.telerik.widget.dataform.visualization.core.EntityPropertyEditor;
						public setInvalidDrawable(param0: androidgraphicsdrawableDrawable): void;
						public isChangeBackground(): boolean;
						public findValidationIcon(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor): androidwidgetImageView;
						public hideNegativeFeedback(): void;
						public getInvalidBackgroundDrawable(): androidgraphicsdrawableDrawable;
						public constructor(param0: androidcontentContext);
						public reset(): void;
						public ensureBackgroundDrawableStateWorkaround(param0: androidwidgetEditText): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.DataFormLayoutManager.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class EditorGroup extends javalangObject {
						public getLayoutManager(): com.telerik.widget.dataform.visualization.DataFormLayoutManager;
						public getHeaderContainer(): androidviewViewGroup;
						public constructor(param0: androidcontentContext, param1: string, param2: number);
						public getHeaderView(): androidviewView;
						public editors(): javautilList<javalangObject>;
						public name(): string;
						public setLayoutManager(param0: com.telerik.widget.dataform.visualization.DataFormLayoutManager): void;
						public static getDefaultLayoutManager(param0: androidcontentContext): com.telerik.widget.dataform.visualization.DataFormLayoutManager;
						public constructor(param0: androidcontentContext, param1: string, param2: androidviewViewGroup);
						public arrangeEditors(): void;
						public static setDefaultLayoutManager(param0: com.telerik.widget.dataform.visualization.DataFormLayoutManager): void;
						public getView(): androidviewView;
						public getEditorsContainer(): androidviewViewGroup;
						public constructor(param0: androidcontentContext, param1: string);
						public rootLayout(): androidviewView;
						public initGroupHeader(param0: androidviewView, param1: string): void;
						public constructor(param0: androidcontentContext, param1: string, param2: androidviewViewGroup, param3: androidviewViewGroup);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class ExpandableEditorGroup extends com.telerik.widget.dataform.visualization.EditorGroup {
						public constructor(param0: androidcontentContext, param1: string, param2: number);
						public onClick(param0: androidviewView): void;
						public constructor(param0: androidcontentContext, param1: string, param2: boolean);
						public removeIsExpandedChangedListener(param0: com.telerik.widget.dataform.visualization.ExpandableEditorGroup.IsExpandedChangedListener): void;
						public setIsExpanded(param0: boolean): void;
						public expandEditors(): void;
						public constructor(param0: androidcontentContext, param1: string, param2: androidviewViewGroup);
						public getIsExpanded(): boolean;
						public collapseEditors(): void;
						public expandButton(): androidviewView;
						public addIsExpandedChangedListener(param0: com.telerik.widget.dataform.visualization.ExpandableEditorGroup.IsExpandedChangedListener): void;
						public constructor(param0: androidcontentContext, param1: string);
						public constructor(param0: androidcontentContext, param1: string, param2: number, param3: boolean);
						public constructor(param0: androidcontentContext, param1: string, param2: androidviewViewGroup, param3: androidviewViewGroup);
					}
					export module ExpandableEditorGroup {
						export class IsExpandedChangedListener {
							/**
							 * Constructs a new instance of the com.telerik.widget.dataform.visualization.ExpandableEditorGroup$IsExpandedChangedListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onChanged(param0: boolean): void;
							});
							public onChanged(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

import androidviewMotionEvent = android.view.MotionEvent;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.android.common.Procedure.d.ts" />
/// <reference path="./com.telerik.android.common.Procedure2.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.DataFormMetadata.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EditorSetupListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.Entity.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyCommitListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyValidationListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.LabelPosition.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.DataFormEntityAdapter.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.DataFormLayoutManager.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.DataFormValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.CommitMode.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyEditor.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyViewer.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.ValidationMode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class RadDataForm {
						public getLabelPosition(): com.telerik.widget.dataform.engine.LabelPosition;
						public setLabelPosition(param0: com.telerik.widget.dataform.engine.LabelPosition): void;
						public getAdapter(): com.telerik.widget.dataform.visualization.DataFormEntityAdapter;
						public addCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public onTouchEvent(param0: androidviewMotionEvent): boolean;
						public onSaveInstanceState(): androidosParcelable;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public addEditorSetupListener(param0: com.telerik.widget.dataform.engine.EditorSetupListener): void;
						public getValidationMode(): com.telerik.widget.dataform.visualization.core.ValidationMode;
						public setEditorsValidationLayout(param0: number): void;
						public setAdapter(param0: com.telerik.widget.dataform.visualization.DataFormEntityAdapter): void;
						public onValidationEvent(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor, param1: com.telerik.widget.dataform.engine.ValidationInfo): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public removeEditorDependency(param0: string): void;
						public getEditorsHeaderLayout(): number;
						public isCanScroll(): boolean;
						public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
						public setEntity(param0: com.telerik.widget.dataform.engine.Entity): void;
						public removeValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
						public applyEditorCustomizations(): void;
						public addEditorDependency(param0: string, param1: com.telerik.android.common.Procedure2, param2: native.Array<string>): void;
						public onValidationFinished(param0: com.telerik.widget.dataform.visualization.DataFormValidationInfo): void;
						public getExistingEditorForProperty(param0: string): com.telerik.widget.dataform.visualization.core.EntityPropertyViewer;
						public removeEditorSetupListener(param0: com.telerik.widget.dataform.engine.EditorSetupListener): void;
						public loadEntityValues(): void;
						public setEditorsHeaderLayout(param0: number): void;
						public clearDependencies(): void;
						public getEditedObject(): javalangObject;
						public commitForced(): void;
						public onRestoreInstanceState(param0: androidosParcelable): void;
						public notifyEditorSetupStarted(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyViewer): void;
						public getEditorsMainLayout(): number;
						public addValidationFinishedListener(param0: com.telerik.android.common.Procedure): void;
						public commitChanges(): void;
						public constructor(param0: androidcontentContext);
						public getMetadata(): com.telerik.widget.dataform.engine.DataFormMetadata;
						public reload(): void;
						public hasValidationErrors(): boolean;
						public getLayoutManager(): com.telerik.widget.dataform.visualization.DataFormLayoutManager;
						public onFocusChanged(param0: boolean, param1: number, param2: androidgraphicsRect): void;
						public resetManualCommit(): void;
						public setLayoutManager(param0: com.telerik.widget.dataform.visualization.DataFormLayoutManager): void;
						public setCanScroll(param0: boolean): void;
						public setValidationMode(param0: com.telerik.widget.dataform.visualization.core.ValidationMode): void;
						public setEditorsMainLayout(param0: number): void;
						public setReloadSuspended(param0: boolean): void;
						public notifyEditorSetupFinished(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyViewer): void;
						public validateChanges(): void;
						public getEntity(): com.telerik.widget.dataform.engine.Entity;
						public getPropertyByName(param0: string): com.telerik.widget.dataform.engine.EntityProperty;
						public getEditorCustomizations(): com.telerik.android.common.Procedure;
						public getEditorsValidationLayout(): number;
						public setIsReadOnly(param0: boolean): void;
						public getCommitMode(): com.telerik.widget.dataform.visualization.core.CommitMode;
						public setCommitMode(param0: com.telerik.widget.dataform.visualization.core.CommitMode): void;
						public isReloadSuspended(): boolean;
						public getIsReadOnly(): boolean;
						public addValidationListener(param0: com.telerik.widget.dataform.engine.EntityPropertyValidationListener): void;
						public validateChanges(param0: com.telerik.android.common.Procedure): void;
						public setEnabled(param0: boolean): void;
						public removeCommitListener(param0: com.telerik.widget.dataform.engine.EntityPropertyCommitListener): void;
						public setMetadata(param0: com.telerik.widget.dataform.engine.DataFormMetadata): void;
						public setEditorCustomizations(param0: com.telerik.android.common.Procedure): void;
						public arrangeEditors(): void;
						public setEntity(param0: javalangObject): void;
						public removeValidationFinishedListener(param0: com.telerik.android.common.Procedure): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.CommitMode.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.ValidationMode.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class RadDataFormInstanceState {
						public static CREATOR: androidosParcelableCreator<javalangObject>;
						public editorIds: javautilHashMap<javalangObject,javalangObject>;
						public validationMode: com.telerik.widget.dataform.visualization.core.ValidationMode;
						public commitMode: com.telerik.widget.dataform.visualization.core.CommitMode;
						public isReadOnly: boolean;
						public constructor(param0: androidosParcel);
						public constructor(param0: androidosParcelable, param1: com.telerik.widget.dataform.visualization.RadDataForm);
						public constructor(param0: androidosParcelable);
						public writeToParcel(param0: androidosParcel, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyEditor.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export class ValidationAnimationBehavior extends com.telerik.widget.dataform.visualization.DataFormValidationViewBehavior {
						public animateEditor(param0: androidviewView): void;
						public showNegativeFeedback(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
						public constructor(param0: androidcontentContext);
						public onValidationEvent(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor, param1: com.telerik.widget.dataform.engine.ValidationInfo): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module annotations {
						export class DataFormEditorParams {
							/**
							 * Constructs a new instance of the com.telerik.widget.dataform.visualization.annotations.DataFormEditorParams interface with the provided implementation.
							 */
							public constructor(implementation: {
								min(): number;
								max(): number;
								step(): number;
							});
							public static DEFAULT_STEP: number;
							public static DEFAULT_MAX: number;
							public static DEFAULT_MIN: number;
							public max(): number;
							public step(): number;
							public min(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.visualization.annotations.DataFormEditorParams.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.annotations.DataFormValidator.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.annotations.DataFormValidatorParams.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module annotations {
						export class DataFormProperty {
							/**
							 * Constructs a new instance of the com.telerik.widget.dataform.visualization.annotations.DataFormProperty interface with the provided implementation.
							 */
							public constructor(implementation: {
								editorLayout(): number;
								coreEditorLayout(): number;
								headerLayout(): number;
								validationLayout(): number;
								imageResource(): number;
								viewer(): javalangClass<javalangObject>;
								editor(): javalangClass<javalangObject>;
								editorParams(): com.telerik.widget.dataform.visualization.annotations.DataFormEditorParams;
								validator(): javalangClass<javalangObject>;
								validatorParams(): com.telerik.widget.dataform.visualization.annotations.DataFormValidatorParams;
								validators(): native.Array<com.telerik.widget.dataform.visualization.annotations.DataFormValidator>;
								converter(): javalangClass<javalangObject>;
								columnSpan(): number;
								index(): number;
								columnIndex(): number;
								group(): string;
								hint(): string;
								required(): boolean;
								label(): string;
								readOnly(): boolean;
								skip(): boolean;
								additionalData(): native.Array<string>;
							});
							public static NULL: string;
							public editor(): javalangClass<javalangObject>;
							public columnSpan(): number;
							public readOnly(): boolean;
							public index(): number;
							public columnIndex(): number;
							public hint(): string;
							public label(): string;
							public editorLayout(): number;
							public imageResource(): number;
							public editorParams(): com.telerik.widget.dataform.visualization.annotations.DataFormEditorParams;
							public validators(): native.Array<com.telerik.widget.dataform.visualization.annotations.DataFormValidator>;
							public viewer(): javalangClass<javalangObject>;
							public coreEditorLayout(): number;
							public skip(): boolean;
							public additionalData(): native.Array<string>;
							public validationLayout(): number;
							public validatorParams(): com.telerik.widget.dataform.visualization.annotations.DataFormValidatorParams;
							public converter(): javalangClass<javalangObject>;
							public headerLayout(): number;
							public required(): boolean;
							public validator(): javalangClass<javalangObject>;
							public group(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.visualization.annotations.DataFormValidatorParams.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module annotations {
						export class DataFormValidator {
							/**
							 * Constructs a new instance of the com.telerik.widget.dataform.visualization.annotations.DataFormValidator interface with the provided implementation.
							 */
							public constructor(implementation: {
								type(): javalangClass<javalangObject>;
								params(): com.telerik.widget.dataform.visualization.annotations.DataFormValidatorParams;
							});
							public type(): javalangClass<javalangObject>;
							public params(): com.telerik.widget.dataform.visualization.annotations.DataFormValidatorParams;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module annotations {
						export class DataFormValidatorParams {
							/**
							 * Constructs a new instance of the com.telerik.widget.dataform.visualization.annotations.DataFormValidatorParams interface with the provided implementation.
							 */
							public constructor(implementation: {
								min(): number;
								max(): number;
								length(): number;
								regEx(): string;
								minimumLength(): number;
								positiveMessage(): string;
								negativeMessage(): string;
							});
							public static NULL: string;
							public static DEFAULT_MAX: number;
							public static DEFAULT_MIN: number;
							public static DEFAULT_LENGTH: number;
							public positiveMessage(): string;
							public max(): number;
							public regEx(): string;
							public negativeMessage(): string;
							public minimumLength(): number;
							public min(): number;
							public length(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module core {
						export class CommitMode {
							public static IMMEDIATE: com.telerik.widget.dataform.visualization.core.CommitMode;
							public static ON_LOST_FOCUS: com.telerik.widget.dataform.visualization.core.CommitMode;
							public static MANUAL: com.telerik.widget.dataform.visualization.core.CommitMode;
							public static values(): native.Array<com.telerik.widget.dataform.visualization.core.CommitMode>;
							public static valueOf(param0: string): com.telerik.widget.dataform.visualization.core.CommitMode;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityPropertyEditorChangeListener.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.DataFormValidationViewBehavior.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.CommitMode.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyEditor.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.ValidationMode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module core {
						export abstract class EntityPropertyEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyViewer implements com.telerik.widget.dataform.engine.ValidationCompletedListener {
							public setEditorValueChangedManually(param0: boolean): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public onEditorValueChanged(param0: javalangObject): void;
							public setCommitMode(param0: com.telerik.widget.dataform.visualization.core.CommitMode): void;
							public viewerSetupFinished(): void;
							public getCommitMode(): com.telerik.widget.dataform.visualization.core.CommitMode;
							public notifyChangeListeners(): void;
							public resetValidationLayout(param0: number): void;
							public setValidationViewBehavior(param0: com.telerik.widget.dataform.visualization.DataFormValidationViewBehavior): void;
							public removeValidationListener(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor.OnValidationEventListener): void;
							public loadPropertyValue(): void;
							public isEditorValueSynced(param0: javalangObject): boolean;
							public value(): javalangObject;
							public addValidationListener(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor.OnValidationEventListener): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public validationInfo(): com.telerik.widget.dataform.engine.ValidationInfo;
							public validationIcon(): androidviewView;
							public removeEditorChangeListener(param0: com.telerik.widget.dataform.engine.EntityPropertyEditorChangeListener): void;
							public onEditorLostFocus(): void;
							public isValidated(): boolean;
							public getEditorValueChangedManually(): boolean;
							public validate(): void;
							public editorSetupFinished(): void;
							public tryApplyValueToProperty(): void;
							public load(): void;
							public getValidationLayoutId(): number;
							public unload(): void;
							public setValidationMode(param0: com.telerik.widget.dataform.visualization.core.ValidationMode): void;
							public canEditorFocus(): boolean;
							public getValidationMode(): com.telerik.widget.dataform.visualization.core.ValidationMode;
							public updateLayoutWithElements(param0: androidviewView, param1: androidviewView, param2: androidviewView, param3: androidviewView, param4: androidviewView, param5: androidviewView): void;
							public validationView(): androidviewView;
							public addEditorChangeListener(param0: com.telerik.widget.dataform.engine.EntityPropertyEditorChangeListener): void;
							public viewerSetupStarted(): void;
							public setValidationLayoutId(param0: number): void;
							public getValidationViewBehavior(): com.telerik.widget.dataform.visualization.DataFormValidationViewBehavior;
						}
						export module EntityPropertyEditor {
							export class OnValidationEventListener {
								/**
								 * Constructs a new instance of the com.telerik.widget.dataform.visualization.core.EntityPropertyEditor$OnValidationEventListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onValidationEvent(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor, param1: com.telerik.widget.dataform.engine.ValidationInfo): void;
								});
								public onValidationEvent(param0: com.telerik.widget.dataform.visualization.core.EntityPropertyEditor, param1: com.telerik.widget.dataform.engine.ValidationInfo): void;
							}
						}
					}
				}
			}
		}
	}
}

import androidtextEditable = android.text.Editable;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.LabelPosition.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module core {
						export abstract class EntityPropertyViewer extends javalangObject {
							public associatedProperty: com.telerik.widget.dataform.engine.EntityProperty;
							public editorView: androidviewView;
							public headerView: androidviewView;
							public mainLayout: androidviewViewGroup;
							public editorMainContainer: androidviewViewGroup;
							public editorContainer: androidviewViewGroup;
							public headerContainer: androidviewViewGroup;
							public dataForm: com.telerik.widget.dataform.visualization.RadDataForm;
							public editorLayoutId: number;
							public headerLayoutId: number;
							public headerViewId: number;
							public editorViewId: number;
							public onDataFormEnabledChanged(): void;
							public findMainLayout(): androidviewViewGroup;
							public getEditorView(): androidviewView;
							public createEditorView(param0: androidcontentContext): androidviewView;
							public property(): com.telerik.widget.dataform.engine.EntityProperty;
							public setEditorLayout(param0: number): void;
							public viewerSetupFinished(): void;
							public findEditorMainContainer(): androidviewViewGroup;
							public updateEditorLayout(): void;
							public onEntityPropertyChanged(): void;
							public notifyEntityPropertyChanged(): void;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public loadPropertyValue(): void;
							public setEnabled(param0: boolean): void;
							public setLabelWidth(param0: number): void;
							public init(param0: number): void;
							public setLabelPosition(param0: com.telerik.widget.dataform.engine.LabelPosition): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public getLabelPosition(): com.telerik.widget.dataform.engine.LabelPosition;
							public updateEnabledState(param0: boolean): void;
							public rootLayout(): androidviewView;
							public createHeaderView(param0: androidcontentContext): androidviewView;
							public findHeaderContainer(): androidviewViewGroup;
							public getHeaderView(): androidviewView;
							public load(): void;
							public unload(): void;
							public getLabelWidth(): number;
							public findEditorImage(): androidwidgetImageView;
							public isEnabled(): boolean;
							public findEditorContainer(): androidviewViewGroup;
							public applyParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
							public updateLayoutWithElements(param0: androidviewView, param1: androidviewView, param2: androidviewView, param3: androidviewView, param4: androidviewView, param5: androidviewView): void;
							public imageView(): androidviewView;
							public initHeader(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public viewerSetupStarted(): void;
							public setHeaderLayout(param0: number): void;
							public initImage(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
						export module EntityPropertyViewer {
							export class HeaderTextWatcher {
								public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
								public afterTextChanged(param0: androidtextEditable): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module core {
						export class ValidationMode {
							public static IMMEDIATE: com.telerik.widget.dataform.visualization.core.ValidationMode;
							public static ON_LOST_FOCUS: com.telerik.widget.dataform.visualization.core.ValidationMode;
							public static MANUAL: com.telerik.widget.dataform.visualization.core.ValidationMode;
							public static values(): native.Array<com.telerik.widget.dataform.visualization.core.ValidationMode>;
							public static valueOf(param0: string): com.telerik.widget.dataform.visualization.core.ValidationMode;
						}
					}
				}
			}
		}
	}
}

import androidwidgetAutoCompleteTextView = android.widget.AutoCompleteTextView;
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.AutoCompleteTextView.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormAutoCompleteEditor extends com.telerik.widget.dataform.visualization.editors.DataFormTextEditor {
							public autoComplete: androidwidgetAutoCompleteTextView;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public getAutoCompleteView(): androidwidgetAutoCompleteTextView;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

import androidwidgetCompoundButton = android.widget.CompoundButton;
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.CompoundButton.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export abstract class DataFormBooleanEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public changeCheckedState(): void;
							public onCheckedChanged(param0: androidwidgetCompoundButton, param1: boolean): void;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public initHeader(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public value(): javalangObject;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.LabelPosition.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormCheckBoxEditor extends com.telerik.widget.dataform.visualization.editors.DataFormBooleanEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public onEntityPropertyChanged(): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public setLabelPosition(param0: com.telerik.widget.dataform.engine.LabelPosition): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormCustomEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public setProvider(param0: com.telerik.widget.dataform.visualization.editors.DataFormCustomEditor.DataFormCustomEditorProvider): void;
							public notifyEditorValueChanged(): void;
							public getProvider(): com.telerik.widget.dataform.visualization.editors.DataFormCustomEditor.DataFormCustomEditorProvider;
							public createEditorView(param0: androidcontentContext): androidviewView;
							public isEditorValueSynced(param0: javalangObject): boolean;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public value(): javalangObject;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
							public notifyEditorLostFocus(): void;
						}
						export module DataFormCustomEditor {
							export class DataFormCustomEditorProvider {
								/**
								 * Constructs a new instance of the com.telerik.widget.dataform.visualization.editors.DataFormCustomEditor$DataFormCustomEditorProvider interface with the provided implementation.
								 */
								public constructor(implementation: {
									createView(param0: androidcontentContext): androidviewView;
									applyValueToEditor(param0: javalangObject, param1: androidviewView): void;
									getValue(param0: androidviewView): javalangObject;
								});
								public createView(param0: androidcontentContext): androidviewView;
								public applyValueToEditor(param0: javalangObject, param1: androidviewView): void;
								public getValue(param0: androidviewView): javalangObject;
							}
						}
					}
				}
			}
		}
	}
}

import androidappAlertDialog = android.app.AlertDialog;
import androidwidgetDatePicker = android.widget.DatePicker;
import javatextDateFormat = java.text.DateFormat;
/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.widget.DatePicker.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormDateEditor extends com.telerik.widget.dataform.visualization.editors.DataFormDateTimeEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public createDialog(): androidappAlertDialog;
							public getDefaultFormat(): javatextDateFormat;
							public onDateSet(param0: androidwidgetDatePicker, param1: number, param2: number, param3: number): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

import javalangLong = java.lang.Long;
/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
/// <reference path="./java.util.Calendar.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export abstract class DataFormDateTimeEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public context: androidcontentContext;
							public setTimeInMillis(param0: javalangLong): void;
							public setValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public getTimeInMillis(): javalangLong;
							public setDateFormat(param0: javatextDateFormat): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public setCalendar(param0: javautilCalendar): void;
							public getCalendar(): javautilCalendar;
							public getDateFormat(): javatextDateFormat;
							public createDialog(): androidappAlertDialog;
							public onClick(param0: androidviewView): void;
							public showDialog(): void;
							public getDefaultFormat(): javatextDateFormat;
							public onEntityPropertyChanged(): void;
							public getValueToStringConverter(): com.telerik.android.common.Function;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public value(): javalangObject;
							public onPropertyValueChanged(param0: javalangObject): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
							public getDialog(): androidappAlertDialog;
						}
					}
				}
			}
		}
	}
}

import javalangNumber = java.lang.Number;
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormDecimalEditor extends com.telerik.widget.dataform.visualization.editors.DataFormIntegerEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public getDefaultValue(): javalangNumber;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public parseNumber(): javalangNumber;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormEmailEditor extends com.telerik.widget.dataform.visualization.editors.DataFormTextEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.EditText.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Number.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormIntegerEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public coreEditor: androidwidgetEditText;
							public originalValue: javalangNumber;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public valueCanBeNull(): boolean;
							public getDefaultValue(): javalangNumber;
							public setValueFormatter(param0: com.telerik.android.common.Function): void;
							public afterTextChanged(param0: androidtextEditable): void;
							public parseNumber(): javalangNumber;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public updateEditorText(param0: string): void;
							public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public canEditorFocus(): boolean;
							public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public onEntityPropertyChanged(): void;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public value(): javalangObject;
							public onFocusChange(param0: androidviewView, param1: boolean): void;
							public getValueFormatter(): com.telerik.android.common.Function;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormLabelEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public isEditorValueSynced(param0: javalangObject): boolean;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public value(): javalangObject;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

import androidwidgetListView = android.widget.ListView;
import androidwidgetListAdapter = android.widget.ListAdapter;
import androidwidgetAdapter = android.widget.Adapter;
import androidwidgetAdapterView = android.widget.AdapterView;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./android.widget.ListAdapter.d.ts" />
/// <reference path="./android.widget.ListView.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.editors.DataFormListViewEditor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormListViewEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public listView: androidwidgetListView;
							public currentValue: javalangObject;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public updateEnabledState(param0: boolean): void;
							public persistItem(param0: number): void;
							public onItemSelected(param0: androidwidgetAdapterView<androidwidgetAdapter>, param1: androidviewView, param2: number, param3: number): void;
							public onItemClick(param0: androidwidgetAdapterView<androidwidgetAdapter>, param1: androidviewView, param2: number, param3: number): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public forceListViewToStretch(param0: androidwidgetListView): void;
							public getItemPosition(param0: javalangObject): number;
							public onEntityPropertyChanged(): void;
							public setAdapter(param0: androidwidgetListAdapter): void;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public isEditorValueSynced(param0: javalangObject): boolean;
							public onNothingSelected(param0: androidwidgetAdapterView<androidwidgetAdapter>): void;
							public value(): javalangObject;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public getAdapter(): androidwidgetListAdapter;
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
						export module DataFormListViewEditor {
							export class DataFormListViewEditorAdapter {
								public isEnabled(): boolean;
								public setEnabled(param0: boolean): void;
								public constructor(param0: com.telerik.widget.dataform.visualization.editors.DataFormListViewEditor, param1: androidcontentContext, param2: number, param3: native.Array<javalangObject>);
								public getView(param0: number, param1: androidviewView, param2: androidviewViewGroup): androidviewView;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormMultilineTextEditor extends com.telerik.widget.dataform.visualization.editors.DataFormTextEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormNumberPickerEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor implements com.telerik.widget.dataform.engine.PropertyChangedListener {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public getValueToStringConverter(): com.telerik.android.common.Function;
							public onPropertyChanged(param0: string, param1: javalangObject): void;
							public applyParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
							public setValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public value(): javalangObject;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormPasswordEditor extends com.telerik.widget.dataform.visualization.editors.DataFormTextEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormPhoneEditor extends com.telerik.widget.dataform.visualization.editors.DataFormTextEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.autocomplete.AutoCompleteAdapter.d.ts" />
/// <reference path="./com.telerik.widget.autocomplete.DisplayMode.d.ts" />
/// <reference path="./com.telerik.widget.autocomplete.RadAutoCompleteTextView.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormRadAutoCompleteEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public setAdapter(param0: com.telerik.widget.autocomplete.AutoCompleteAdapter): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public updateEnabledState(param0: boolean): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty, param2: com.telerik.widget.autocomplete.AutoCompleteAdapter);
							public updateAdapter(): void;
							public setDisplayMode(param0: com.telerik.widget.autocomplete.DisplayMode): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public getAdapter(): com.telerik.widget.autocomplete.AutoCompleteAdapter;
							public onEntityPropertyChanged(): void;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public isEditorValueSynced(param0: javalangObject): boolean;
							public setEnabled(param0: boolean): void;
							public getDisplayMode(): com.telerik.widget.autocomplete.DisplayMode;
							public value(): javalangObject;
							public getAutoCompleteView(): com.telerik.widget.autocomplete.RadAutoCompleteTextView;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

import androidwidgetRadioButton = android.widget.RadioButton;
import androidwidgetRadioGroup = android.widget.RadioGroup;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.RadioButton.d.ts" />
/// <reference path="./android.widget.RadioGroup.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.Procedure.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormRadioGroupEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public updateEnabledState(param0: boolean): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public recreateRadioButtons(): void;
							public setValues(param0: native.Array<javalangObject>): void;
							public setValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public createButton(param0: androidcontentContext): androidwidgetRadioButton;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public onCheckedChanged(param0: androidwidgetRadioGroup, param1: number): void;
							public setCustomizeButtons(param0: com.telerik.android.common.Procedure): void;
							public getValues(): native.Array<javalangObject>;
							public findButtonByTag(param0: javalangObject): androidwidgetRadioButton;
							public onEntityPropertyChanged(): void;
							public getValueToStringConverter(): com.telerik.android.common.Function;
							public getCustomizeButtons(): com.telerik.android.common.Procedure;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public isEditorValueSynced(param0: javalangObject): boolean;
							public applyCustomizeButtons(): void;
							public value(): javalangObject;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

import androidwidgetSeekBar = android.widget.SeekBar;
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.SeekBar.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormSeekBarEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public onProgressChanged(param0: androidwidgetSeekBar, param1: number, param2: boolean): void;
							public getMax(): number;
							public onStopTrackingTouch(param0: androidwidgetSeekBar): void;
							public setMax(param0: number): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public setMin(param0: number): void;
							public getMin(): number;
							public getTypedValue(): number;
							public applyParams(param0: javautilHashMap<javalangObject,javalangObject>): void;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public setTypedValue(param0: number): void;
							public onStartTrackingTouch(param0: androidwidgetSeekBar): void;
							public value(): javalangObject;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.widget.RadioButton.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormSegmentedEditor extends com.telerik.widget.dataform.visualization.editors.DataFormRadioGroupEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public createButton(param0: androidcontentContext): androidwidgetRadioButton;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.editors.adapters.EditorSpinnerAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormSpinnerEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public getSpinnerItemLayoutId(): number;
							public onItemSelected(param0: androidwidgetAdapterView<androidwidgetAdapter>, param1: androidviewView, param2: number, param3: number): void;
							public setSpinnerItemLayoutId(param0: number): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public canEditorFocus(): boolean;
							public getAdapter(): com.telerik.widget.dataform.visualization.editors.adapters.EditorSpinnerAdapter;
							public onEntityPropertyChanged(): void;
							public setAdapter(param0: com.telerik.widget.dataform.visualization.editors.adapters.EditorSpinnerAdapter): void;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty, param2: com.telerik.widget.dataform.visualization.editors.adapters.EditorSpinnerAdapter);
							public isEditorValueSynced(param0: javalangObject): boolean;
							public onNothingSelected(param0: androidwidgetAdapterView<androidwidgetAdapter>): void;
							public value(): javalangObject;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormSwitchEditor extends com.telerik.widget.dataform.visualization.editors.DataFormBooleanEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public updateEditorLayout(): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormTextEditor extends com.telerik.widget.dataform.visualization.core.EntityPropertyEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public afterTextChanged(param0: androidtextEditable): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public canEditorFocus(): boolean;
							public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public onEntityPropertyChanged(): void;
							public initEditor(param0: androidviewView, param1: com.telerik.widget.dataform.engine.EntityProperty): void;
							public isEditorValueSynced(param0: javalangObject): boolean;
							public value(): javalangObject;
							public onFocusChange(param0: androidviewView, param1: boolean): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

import androidwidgetTimePicker = android.widget.TimePicker;
/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.widget.TimePicker.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormTimeEditor extends com.telerik.widget.dataform.visualization.editors.DataFormDateTimeEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public createDialog(): androidappAlertDialog;
							public getDefaultFormat(): javatextDateFormat;
							public onTimeSet(param0: androidwidgetTimePicker, param1: number, param2: number): void;
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.ValidationInfo.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export class DataFormToggleButtonEditor extends com.telerik.widget.dataform.visualization.editors.DataFormBooleanEditor {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public validationCompleted(param0: com.telerik.widget.dataform.engine.ValidationInfo): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module editors {
						export module adapters {
							export class EditorSpinnerAdapter {
								public getPosition(param0: javalangObject): number;
								public setItems(param0: native.Array<javalangObject>): void;
								public getDropDownView(param0: number, param1: androidviewView, param2: androidviewViewGroup): androidviewView;
								public getItem(param0: number): javalangObject;
								public getCount(): number;
								public constructor(param0: androidcontentContext, param1: number, param2: native.Array<javalangObject>);
								public getView(param0: number, param1: androidviewView, param2: androidviewViewGroup): androidviewView;
								public constructor(param0: androidcontentContext, param1: native.Array<javalangObject>);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module metadata {
						export class MetadataProvider {
							public constructor();
							public addMetadataForProperty(param0: com.telerik.widget.dataform.engine.EntityProperty, param1: javalangObject): void;
							public resolveMetadataForProperty(param0: com.telerik.widget.dataform.engine.EntityProperty): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyEditor.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyViewer.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module registries {
						export class EditorRegistry {
							public createDefaultEditor(param0: com.telerik.widget.dataform.engine.EntityProperty): com.telerik.widget.dataform.visualization.core.EntityPropertyEditor;
							public resolveEditorForType(param0: com.telerik.widget.dataform.engine.EntityProperty): com.telerik.widget.dataform.visualization.core.EntityPropertyEditor;
							public createEditorFromMetadata(param0: com.telerik.widget.dataform.engine.EntityProperty): com.telerik.widget.dataform.visualization.core.EntityPropertyEditor;
							public addEditorForTypes(param0: javalangClass<javalangObject>, param1: native.Array<javalangClass<javalangObject>>): void;
							public resolveEditorForProperty(param0: com.telerik.widget.dataform.engine.EntityProperty): com.telerik.widget.dataform.visualization.core.EntityPropertyEditor;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm);
							public resolveViewerForType(param0: com.telerik.widget.dataform.engine.EntityProperty): com.telerik.widget.dataform.visualization.core.EntityPropertyViewer;
							public createViewerFromMetadata(param0: com.telerik.widget.dataform.engine.EntityProperty): com.telerik.widget.dataform.visualization.core.EntityPropertyViewer;
							public addEditorForProperty(param0: javalangClass<javalangObject>, param1: string): void;
							public addViewerForTypes(param0: javalangClass<javalangObject>, param1: native.Array<javalangClass<javalangObject>>): void;
							public resolveViewerForProperty(param0: com.telerik.widget.dataform.engine.EntityProperty): com.telerik.widget.dataform.visualization.core.EntityPropertyViewer;
							public addViewForProperty(param0: javalangClass<javalangObject>, param1: string): void;
							public resetEditorTypeRegistry(): void;
							public createDefaultViewer(param0: com.telerik.widget.dataform.engine.EntityProperty): com.telerik.widget.dataform.visualization.core.EntityPropertyViewer;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module viewers {
						export abstract class DataFormBooleanViewer extends com.telerik.widget.dataform.visualization.core.EntityPropertyViewer {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module viewers {
						export class DataFormCheckBoxViewer extends com.telerik.widget.dataform.visualization.viewers.DataFormBooleanViewer {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module viewers {
						export abstract class DataFormDateTimeViewer extends com.telerik.widget.dataform.visualization.core.EntityPropertyViewer {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public getDefaultFormat(): javatextDateFormat;
							public getValueToStringConverter(): com.telerik.android.common.Function;
							public updateText(): void;
							public setValueToStringConverter(param0: com.telerik.android.common.Function): void;
							public setDateFormat(param0: javatextDateFormat): void;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public getDateFormat(): javatextDateFormat;
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module viewers {
						export class DataFormDateViewer extends com.telerik.widget.dataform.visualization.viewers.DataFormDateTimeViewer {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public getDefaultFormat(): javatextDateFormat;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module viewers {
						export class DataFormTextViewer extends com.telerik.widget.dataform.visualization.core.EntityPropertyViewer {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
							public applyEntityValueToEditor(param0: javalangObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.dataform.engine.EntityProperty.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.RadDataForm.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module viewers {
						export class DataFormTimeViewer extends com.telerik.widget.dataform.visualization.viewers.DataFormDateTimeViewer {
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: com.telerik.widget.dataform.engine.EntityProperty);
							public getDefaultFormat(): javatextDateFormat;
							public constructor(param0: com.telerik.widget.dataform.visualization.RadDataForm, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.telerik.widget.dataform.engine.EntityProperty);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./com.telerik.widget.dataform.visualization.core.EntityPropertyViewer.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module dataform {
				export module visualization {
					export module viewers {
						export class DataFormViewerState {
							public static CREATOR: androidosParcelableCreator<javalangObject>;
							public editorId: number;
							public constructor(param0: androidosParcelable, param1: com.telerik.widget.dataform.visualization.core.EntityPropertyViewer);
							public writeToParcel(param0: androidosParcel, param1: number): void;
							public constructor(param0: androidosParcelable);
							public constructor(param0: androidosParcel);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./com.telerik.widget.numberpicker.RadNumberPicker.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module numberpicker {
				export class NumberPickerInstanceState {
					public static CREATOR: androidosParcelableCreator<javalangObject>;
					public value: number;
					public constructor(param0: androidosParcelable, param1: com.telerik.widget.numberpicker.RadNumberPicker);
					public constructor(param0: androidosParcel);
					public constructor(param0: androidosParcelable);
					public writeToParcel(param0: androidosParcel, param1: number): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.widget.dataform.engine.PropertyChangedListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module numberpicker {
				export class RadNumberPicker {
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
					public setValueToStringConverter(param0: com.telerik.android.common.Function): void;
					public onClick(param0: androidviewView): void;
					public addPropertyChangedListener(param0: com.telerik.widget.dataform.engine.PropertyChangedListener): void;
					public setPluralFormatString(param0: string): void;
					public labelView(): androidwidgetTextView;
					public onRestoreInstanceState(param0: androidosParcelable): void;
					public onSaveInstanceState(): androidosParcelable;
					public setSingleFormatString(param0: string): void;
					public getValue(): number;
					public getValueToStringConverter(): com.telerik.android.common.Function;
					public getZeroFormatString(): string;
					public setEnabled(param0: boolean): void;
					public increaseView(): androidwidgetTextView;
					public rootView(): androidviewView;
					public getMinimum(): number;
					public decreaseView(): androidwidgetTextView;
					public setMinimum(param0: number): void;
					public removePropertyChangedListener(param0: com.telerik.widget.dataform.engine.PropertyChangedListener): void;
					public setZeroFormatString(param0: string): void;
					public getStep(): number;
					public setMaximum(param0: number): void;
					public getPluralFormatString(): string;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public getMaximum(): number;
					public setValue(param0: number): void;
					public setStep(param0: number): void;
					public constructor(param0: androidcontentContext);
					public getSingleFormatString(): string;
				}
			}
		}
	}
}

