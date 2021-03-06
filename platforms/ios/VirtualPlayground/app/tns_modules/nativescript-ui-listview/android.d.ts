import androidwidgetAdapterView = android.widget.AdapterView;
import javalangEnum = java.lang.Enum;
import javautilListIterator = java.util.ListIterator;
import javalangRunnable = java.lang.Runnable;
import javalangannotationAnnotation = java.lang.annotation.Annotation;

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.AdapterView.d.ts" />
/// <reference path="./com.telerik.android.data.CurrentItemChangedInfo.d.ts" />
/// <reference path="./com.telerik.android.data.DataChangeInfo.d.ts" />
/// <reference path="./com.telerik.android.data.SelectionChangeInfo.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class AndroidDataSourceAdapter extends com.telerik.android.data.DataSourceAdapterBase {
					public dataChanged(param0: com.telerik.android.data.DataChangeInfo): void;
					public onItemSelected(param0: androidwidgetAdapterView<any>, param1: androidviewView, param2: number, param3: number): void;
					public onNothingSelected(param0: androidwidgetAdapterView<any>): void;
					public constructor(param0: javautilList<any>, param1: androidcontentContext);
					public selectionChanged(param0: com.telerik.android.data.SelectionChangeInfo): void;
					public constructor(param0: javautilList<any>, param1: androidcontentContext, param2: androidwidgetAdapterView<any>);
					public onItemClick(param0: androidwidgetAdapterView<any>, param1: androidviewView, param2: number, param3: number): void;
					public currentItemChanged(param0: com.telerik.android.data.CurrentItemChangedInfo): void;
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.data.CurrentItemChangedListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class CurrencyService {
					public addCurrentChangedListener(param0: com.telerik.android.data.CurrentItemChangedListener): void;
					public getCurrentItem(): javalangObject;
					public isCurrent(param0: javalangObject): boolean;
					public movePrevious(): boolean;
					public constructor(param0: javautilList<any>);
					public removeCurrentChangedListener(param0: com.telerik.android.data.CurrentItemChangedListener): boolean;
					public setCurrentItem(param0: javalangObject): void;
					public moveFirst(): void;
					public onCurrentItemChanged(param0: javalangObject, param1: javalangObject): void;
					public moveNext(): boolean;
					public moveLast(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class CurrentItemChangedInfo {
					public constructor(param0: javalangObject, param1: javalangObject);
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.data.CurrentItemChangedInfo.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class CurrentItemChangedListener {
					/**
					 * Constructs a new instance of the com.telerik.android.data.CurrentItemChangedListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						currentItemChanged(param0: com.telerik.android.data.CurrentItemChangedInfo): void;
					});
					public currentItemChanged(param0: com.telerik.android.data.CurrentItemChangedInfo): void;
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module android {
			export module data {
				export class DataChangeInfo {
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.data.DataChangeInfo.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class DataChangedListener {
					/**
					 * Constructs a new instance of the com.telerik.android.data.DataChangedListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						dataChanged(param0: com.telerik.android.data.DataChangeInfo): void;
					});
					public dataChanged(param0: com.telerik.android.data.DataChangeInfo): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class DataItem {
					public toString(): string;
					public entity(): javalangObject;
					public groupKey(): javalangObject;
					public getItems(): javautilList<any>;
					public constructor(param0: javalangObject, param1: javalangObject);
					public constructor(param0: javalangObject);
				}
			}
		}
	}
}

import androidviewViewGroup = android.view.ViewGroup;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.android.data.CurrentItemChangedInfo.d.ts" />
/// <reference path="./com.telerik.android.data.DataChangeInfo.d.ts" />
/// <reference path="./com.telerik.android.data.DataItem.d.ts" />
/// <reference path="./com.telerik.android.data.RadDataSource.d.ts" />
/// <reference path="./com.telerik.android.data.SelectionChangeInfo.d.ts" />
/// <reference path="./com.telerik.android.data.SelectionService.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class DataSourceAdapterBase {
					public dataChanged(param0: com.telerik.android.data.DataChangeInfo): void;
					public dataSource(): com.telerik.android.data.RadDataSource;
					public getCount(): number;
					public constructor(param0: javautilList<any>, param1: androidcontentContext);
					public selectionChanged(param0: com.telerik.android.data.SelectionChangeInfo): void;
					public currentItemChanged(param0: com.telerik.android.data.CurrentItemChangedInfo): void;
					public getItem(param0: number): javalangObject;
					public getView(param0: number, param1: androidviewView, param2: androidviewViewGroup): androidviewView;
					public selectionService(): com.telerik.android.data.SelectionService;
					public getViewType(): com.telerik.android.data.DataSourceAdapterBase.ViewType;
					public getItemId(param0: number): number;
					public setViewType(param0: com.telerik.android.data.DataSourceAdapterBase.ViewType): void;
					public createCurrentView(param0: com.telerik.android.data.DataItem): androidviewView;
				}
				export module DataSourceAdapterBase {
					export class ViewType {
						public static FLAT: com.telerik.android.data.DataSourceAdapterBase.ViewType;
						public static HIERARCHY: com.telerik.android.data.DataSourceAdapterBase.ViewType;
						public static values(): native.Array<com.telerik.android.data.DataSourceAdapterBase.ViewType>;
						public static valueOf(param0: string): com.telerik.android.data.DataSourceAdapterBase.ViewType;
					}
				}
			}
		}
	}
}

import orgjsonJSONException = org.json.JSONException;
/// <reference path="./com.telerik.android.data.RadDataSource.d.ts" />
/// <reference path="./org.json.JSONException.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class OnJSONDataSourceCreated {
					/**
					 * Constructs a new instance of the com.telerik.android.data.OnJSONDataSourceCreated interface with the provided implementation.
					 */
					public constructor(implementation: {
						onError(param0: orgjsonJSONException): void;
						onDataSourceCreated(param0: com.telerik.android.data.RadDataSource): void;
					});
					public onError(param0: orgjsonJSONException): void;
					public onDataSourceCreated(param0: com.telerik.android.data.RadDataSource): void;
				}
			}
		}
	}
}

import javalangIterable = java.lang.Iterable;
import javanetURL = java.net.URL;
import javautilIterator = java.util.Iterator;
/// <reference path="./com.telerik.android.common.CollectionChangedEvent.d.ts" />
/// <reference path="./com.telerik.android.common.ObservableCollection.d.ts" />
/// <reference path="./com.telerik.android.data.DataChangedListener.d.ts" />
/// <reference path="./com.telerik.android.data.OnJSONDataSourceCreated.d.ts" />
/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class RadDataSource {
					public collectionChanged(param0: com.telerik.android.common.CollectionChangedEvent): void;
					public sortDescriptors(): com.telerik.android.common.ObservableCollection;
					public filterDescriptors(): com.telerik.android.common.ObservableCollection;
					public groupDescriptors(): com.telerik.android.common.ObservableCollection;
					public flatView(): javautilList<any>;
					public suspendUpdate(): void;
					public addDataChangeListener(param0: com.telerik.android.data.DataChangedListener): void;
					public constructor(param0: javalangIterable<any>);
					public resumeUpdate(): void;
					public iterator(): javautilIterator<any>;
					public invalidateDescriptors(): void;
					public removeDataChangeListener(param0: com.telerik.android.data.DataChangedListener): void;
					public view(): javautilList<any>;
					public setSource(param0: javalangIterable<any>): void;
					public constructor();
					public onDataChanged(): void;
					public resumeUpdate(param0: boolean): void;
					public static createFromJson(param0: string): com.telerik.android.data.RadDataSource;
					public getSource(): javalangIterable<any>;
					public static createFromJsonUrl(param0: javanetURL, param1: com.telerik.android.data.OnJSONDataSourceCreated): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.telerik.android.data.CurrentItemChangedInfo.d.ts" />
/// <reference path="./com.telerik.android.data.DataChangeInfo.d.ts" />
/// <reference path="./com.telerik.android.data.SelectionChangeInfo.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class RadDataSourceAdapter extends com.telerik.android.data.DataSourceAdapterBase {
					public dataChanged(param0: com.telerik.android.data.DataChangeInfo): void;
					public constructor(param0: javautilList<any>, param1: androidcontentContext);
					public selectionChanged(param0: com.telerik.android.data.SelectionChangeInfo): void;
					public currentItemChanged(param0: com.telerik.android.data.CurrentItemChangedInfo): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Iterable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class SelectionChangeInfo {
					public selectedItems(): javalangIterable<any>;
					public constructor(param0: javautilList<any>, param1: javautilList<any>);
					public deselectedItems(): javalangIterable<any>;
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.data.SelectionChangeInfo.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class SelectionChangeListener {
					/**
					 * Constructs a new instance of the com.telerik.android.data.SelectionChangeListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						selectionChanged(param0: com.telerik.android.data.SelectionChangeInfo): void;
					});
					public selectionChanged(param0: com.telerik.android.data.SelectionChangeInfo): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class SelectionMode {
					public static NONE: com.telerik.android.data.SelectionMode;
					public static SINGLE: com.telerik.android.data.SelectionMode;
					public static MULTIPLE: com.telerik.android.data.SelectionMode;
					public static valueOf(param0: string): com.telerik.android.data.SelectionMode;
					public static values(): native.Array<com.telerik.android.data.SelectionMode>;
				}
			}
		}
	}
}

/// <reference path="./com.telerik.android.data.SelectionChangeListener.d.ts" />
/// <reference path="./com.telerik.android.data.SelectionMode.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module android {
			export module data {
				export class SelectionService {
					public selectItems(param0: javautilList<any>): void;
					public addSelectionChangeListener(param0: com.telerik.android.data.SelectionChangeListener): void;
					public selectedItems(): javautilList<any>;
					public setSelectionMode(param0: com.telerik.android.data.SelectionMode): void;
					public clearSelection(): void;
					public selectItem(param0: javalangObject): void;
					public getSelectionMode(): com.telerik.android.data.SelectionMode;
					public deselectItem(param0: javalangObject): void;
					public constructor();
					public selectedItemsSize(): number;
					public onSelectionChanged(param0: javautilList<any>, param1: javautilList<any>): void;
					public removeSelectionChangeListener(param0: com.telerik.android.data.SelectionChangeListener): boolean;
					public get(param0: number): javalangObject;
					public isItemSelected(param0: javalangObject): boolean;
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module list {
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

/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class CollapsedViewHolder extends com.telerik.widget.list.ListViewHolder {
					public constructor(param0: androidviewView);
				}
			}
		}
	}
}

import androidosParcelable = android.os.Parcelable;
import androidviewMotionEvent = android.view.MotionEvent;
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class CollapsibleGroupsBehavior extends com.telerik.widget.list.ListViewBehavior {
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public onTapUp(param0: androidviewMotionEvent): boolean;
					public getExpandImageResource(): number;
					public changeIsGroupCollapsed(param0: javalangObject): void;
					public addListener(param0: com.telerik.widget.list.CollapsibleGroupsBehavior.CollapseGroupListener): void;
					public isGroupCollapsed(param0: javalangObject): boolean;
					public setCollapseImageResource(param0: number): void;
					public getCollapseImageResource(): number;
					public setExpandImageResource(param0: number): void;
					public onSaveInstanceState(param0: androidosParcelable): void;
					public onRestoreInstanceState(param0: androidosParcelable): void;
					public constructor();
					public expandAll(): void;
					public removeListener(param0: com.telerik.widget.list.CollapsibleGroupsBehavior.CollapseGroupListener): void;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
					public collapseAll(): void;
					public constructor(param0: number);
				}
				export module CollapsibleGroupsBehavior {
					export class CollapseGroupListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.CollapsibleGroupsBehavior$CollapseGroupListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onGroupCollapsed(param0: javalangObject): void;
							onGroupExpanded(param0: javalangObject): void;
						});
						public onGroupExpanded(param0: javalangObject): void;
						public onGroupCollapsed(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class CurrentPositionChangeListener {
					/**
					 * Constructs a new instance of the com.telerik.widget.list.CurrentPositionChangeListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onCurrentPositionChanged(param0: number, param1: number): void;
					});
					public onCurrentPositionChanged(param0: number, param1: number): void;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ScrollingView extends javalangObject {
					/**
					 * Constructs a new instance of the android.support.v4.view.ScrollingView interface with the provided implementation.
					 */
					public constructor(implementation: {
						computeHorizontalScrollRange(): number;
						computeHorizontalScrollOffset(): number;
						computeHorizontalScrollExtent(): number;
						computeVerticalScrollRange(): number;
						computeVerticalScrollOffset(): number;
						computeVerticalScrollExtent(): number;
					});
					public computeVerticalScrollRange(): number;
					public computeVerticalScrollExtent(): number;
					public computeHorizontalScrollRange(): number;
					public computeHorizontalScrollExtent(): number;
					public computeHorizontalScrollOffset(): number;
					public computeVerticalScrollOffset(): number;
				}
			}
		}
	}
}

declare module android {
	export module support {
		export module v4 {
			export module view {
				export class NestedScrollingChild extends javalangObject {
					/**
					 * Constructs a new instance of the android.support.v4.view.NestedScrollingChild interface with the provided implementation.
					 */
					public constructor(implementation: {
						setNestedScrollingEnabled(param0: boolean): void;
						isNestedScrollingEnabled(): boolean;
						startNestedScroll(param0: number): boolean;
						stopNestedScroll(): void;
						hasNestedScrollingParent(): boolean;
						dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
						dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
						dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
						dispatchNestedPreFling(param0: number, param1: number): boolean;
					});
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
					public isNestedScrollingEnabled(): boolean;
					public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					public stopNestedScroll(): void;
					public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
					public setNestedScrollingEnabled(param0: boolean): void;
					public dispatchNestedPreFling(param0: number, param1: number): boolean;
					public startNestedScroll(param0: number): boolean;
					public hasNestedScrollingParent(): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class RecyclerViewAccessibilityDelegate extends android.support.v4.view.AccessibilityDelegateCompat {
					public performAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public constructor();
					public onInitializeAccessibilityNodeInfo(param0: android.view.View, param1: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
					public constructor(param0: android.support.v7.widget.RecyclerView);
					public onInitializeAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerViewAccessibilityDelegate.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.util.SparseArray.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class RecyclerView extends android.view.ViewGroup implements android.support.v4.view.ScrollingView, android.support.v4.view.NestedScrollingChild {
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static NO_POSITION: number;
					public static NO_ID: number;
					public static INVALID_TYPE: number;
					public static TOUCH_SLOP_DEFAULT: number;
					public static TOUCH_SLOP_PAGING: number;
					public static SCROLL_STATE_IDLE: number;
					public static SCROLL_STATE_DRAGGING: number;
					public static SCROLL_STATE_SETTLING: number;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public onDraw(param0: android.graphics.Canvas): void;
					public getChildDrawingOrder(param0: number, param1: number): number;
					public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
					public addItemDecoration(param0: android.support.v7.widget.RecyclerView.ItemDecoration): void;
					public getChildAdapterPosition(param0: android.view.View): number;
					public scrollToPosition(param0: number): void;
					public isTextDirectionResolved(): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public removeItemDecoration(param0: android.support.v7.widget.RecyclerView.ItemDecoration): void;
					public onChildDetachedFromWindow(param0: android.view.View): void;
					public addView(param0: android.view.View, param1: number): void;
					public stopNestedScroll(): void;
					public computeHorizontalScrollExtent(): number;
					public getMinFlingVelocity(): number;
					public setAdapter(param0: android.support.v7.widget.RecyclerView.Adapter): void;
					public removeOnChildAttachStateChangeListener(param0: android.support.v7.widget.RecyclerView.OnChildAttachStateChangeListener): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;
					public setRecycledViewPool(param0: android.support.v7.widget.RecyclerView.RecycledViewPool): void;
					public offsetChildrenHorizontal(param0: number): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public isComputingLayout(): boolean;
					public getLayoutDirection(): number;
					public addItemDecoration(param0: android.support.v7.widget.RecyclerView.ItemDecoration, param1: number): void;
					public getParentForAccessibility(): android.view.ViewParent;
					public onChildAttachedToWindow(param0: android.view.View): void;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public removeDetachedView(param0: android.view.View, param1: boolean): void;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public offsetChildrenVertical(param0: number): void;
					public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					public childDrawableStateChanged(param0: android.view.View): void;
					public setScrollingTouchSlop(param0: number): void;
					public scrollTo(param0: number, param1: number): void;
					public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
					public focusSearch(param0: number): android.view.View;
					public getRecycledViewPool(): android.support.v7.widget.RecyclerView.RecycledViewPool;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public removeOnItemTouchListener(param0: android.support.v7.widget.RecyclerView.OnItemTouchListener): void;
					public isTextAlignmentResolved(): boolean;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public invalidateItemDecorations(): void;
					public isAnimating(): boolean;
					public getChildItemId(param0: android.view.View): number;
					public canResolveTextAlignment(): boolean;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public findViewHolderForLayoutPosition(param0: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public getChildPosition(param0: android.view.View): number;
					public getChildViewHolder(param0: android.view.View): android.support.v7.widget.RecyclerView.ViewHolder;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public addFocusables(param0: javautilArrayList<any>, param1: number, param2: number): void;
					public setNestedScrollingEnabled(param0: boolean): void;
					public generateDefaultLayoutParams(): android.view.ViewGroup.LayoutParams;
					public stopScroll(): void;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public hasPendingAdapterUpdates(): boolean;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public addFocusables(param0: javautilArrayList<any>, param1: number): void;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public getItemAnimator(): android.support.v7.widget.RecyclerView.ItemAnimator;
					public computeVerticalScrollRange(): number;
					public getTextAlignment(): number;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public onScrolled(param0: number, param1: number): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public smoothScrollToPosition(param0: number): void;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
					public constructor(param0: android.content.Context);
					public dispatchSaveInstanceState(param0: android.util.SparseArray<any>): void;
					public isNestedScrollingEnabled(): boolean;
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public checkLayoutParams(param0: android.view.ViewGroup.LayoutParams): boolean;
					public getChildLayoutPosition(param0: android.view.View): number;
					public dispatchNestedPreFling(param0: number, param1: number): boolean;
					public computeHorizontalScrollOffset(): number;
					public setHasFixedSize(param0: boolean): void;
					public findContainingViewHolder(param0: android.view.View): android.support.v7.widget.RecyclerView.ViewHolder;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public getScrollState(): number;
					public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public computeHorizontalScrollRange(): number;
					public isLayoutRequested(): boolean;
					public onAttachedToWindow(): void;
					public clearChildFocus(param0: android.view.View): void;
					public setAccessibilityDelegateCompat(param0: android.support.v7.widget.RecyclerViewAccessibilityDelegate): void;
					public findViewHolderForItemId(param0: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public swapAdapter(param0: android.support.v7.widget.RecyclerView.Adapter, param1: boolean): void;
					public generateLayoutParams(param0: android.util.AttributeSet): android.view.ViewGroup.LayoutParams;
					public isLayoutDirectionResolved(): boolean;
					public setItemViewCacheSize(param0: number): void;
					public computeVerticalScrollExtent(): number;
					public setChildDrawingOrderCallback(param0: android.support.v7.widget.RecyclerView.ChildDrawingOrderCallback): void;
					public addOnChildAttachStateChangeListener(param0: android.support.v7.widget.RecyclerView.OnChildAttachStateChangeListener): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public bringChildToFront(param0: android.view.View): void;
					public onScrollStateChanged(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public getCompatAccessibilityDelegate(): android.support.v7.widget.RecyclerViewAccessibilityDelegate;
					public addView(param0: android.view.View, param1: number, param2: number): void;
					public getLayoutManager(): android.support.v7.widget.RecyclerView.LayoutManager;
					public computeVerticalScrollOffset(): number;
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
					public findContainingItemView(param0: android.view.View): android.view.View;
					public setLayoutFrozen(param0: boolean): void;
					public dispatchRestoreInstanceState(param0: android.util.SparseArray<any>): void;
					public clearOnChildAttachStateChangeListeners(): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public setLayoutManager(param0: android.support.v7.widget.RecyclerView.LayoutManager): void;
					public requestFitSystemWindows(): void;
					public findViewHolderForAdapterPosition(param0: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public isAttachedToWindow(): boolean;
					public requestTransparentRegion(param0: android.view.View): void;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public scrollBy(param0: number, param1: number): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public getBaseline(): number;
					public findChildViewUnder(param0: number, param1: number): android.view.View;
					public clearOnScrollListeners(): void;
					public addOnScrollListener(param0: android.support.v7.widget.RecyclerView.OnScrollListener): void;
					public canResolveTextDirection(): boolean;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public setClipToPadding(param0: boolean): void;
					public fling(param0: number, param1: number): boolean;
					public onStopNestedScroll(param0: android.view.View): void;
					public canResolveLayoutDirection(): boolean;
					public findViewHolderForPosition(param0: number): android.support.v7.widget.RecyclerView.ViewHolder;
					public removeView(param0: android.view.View): void;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;
					public hasFixedSize(): boolean;
					public isLayoutFrozen(): boolean;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.view.ViewGroup.LayoutParams;
					public setOnScrollListener(param0: android.support.v7.widget.RecyclerView.OnScrollListener): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public getMaxFlingVelocity(): number;
					public focusableViewAvailable(param0: android.view.View): void;
					public setRecyclerListener(param0: android.support.v7.widget.RecyclerView.RecyclerListener): void;
					public addView(param0: android.view.View): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public smoothScrollBy(param0: number, param1: number): void;
					public drawChild(param0: android.graphics.Canvas, param1: android.view.View, param2: number): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public setViewCacheExtension(param0: android.support.v7.widget.RecyclerView.ViewCacheExtension): void;
					public addOnItemTouchListener(param0: android.support.v7.widget.RecyclerView.OnItemTouchListener): void;
					public startNestedScroll(param0: number): boolean;
					public hasNestedScrollingParent(): boolean;
					public removeOnScrollListener(param0: android.support.v7.widget.RecyclerView.OnScrollListener): void;
				}
				export module RecyclerView {
					export abstract class Adapter extends javalangObject {
						public notifyItemMoved(param0: number, param1: number): void;
						public setHasStableIds(param0: boolean): void;
						public unregisterAdapterDataObserver(param0: android.support.v7.widget.RecyclerView.AdapterDataObserver): void;
						public createViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
						public hasStableIds(): boolean;
						public onCreateViewHolder(param0: android.view.ViewGroup, param1: number): android.support.v7.widget.RecyclerView.ViewHolder;
						public bindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
						public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number, param2: javautilList<any>): void;
						public onFailedToRecycleView(param0: android.support.v7.widget.RecyclerView.ViewHolder): boolean;
						public getItemId(param0: number): number;
						public onViewRecycled(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public notifyItemChanged(param0: number): void;
						public notifyItemInserted(param0: number): void;
						public onAttachedToRecyclerView(param0: android.support.v7.widget.RecyclerView): void;
						public constructor();
						public hasObservers(): boolean;
						public onViewAttachedToWindow(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public onViewDetachedFromWindow(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public onBindViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): void;
						public getItemViewType(param0: number): number;
						public notifyItemRangeChanged(param0: number, param1: number): void;
						public notifyItemRangeChanged(param0: number, param1: number, param2: javalangObject): void;
						public notifyItemRangeRemoved(param0: number, param1: number): void;
						public onDetachedFromRecyclerView(param0: android.support.v7.widget.RecyclerView): void;
						public notifyDataSetChanged(): void;
						public notifyItemRangeInserted(param0: number, param1: number): void;
						public getItemCount(): number;
						public notifyItemChanged(param0: number, param1: javalangObject): void;
						public notifyItemRemoved(param0: number): void;
						public registerAdapterDataObserver(param0: android.support.v7.widget.RecyclerView.AdapterDataObserver): void;
					}
					export class AdapterDataObservable extends android.database.Observable<any> {
						public notifyItemMoved(param0: number, param1: number): void;
						public hasObservers(): boolean;
						public notifyItemRangeInserted(param0: number, param1: number): void;
						public notifyItemRangeChanged(param0: number, param1: number): void;
						public notifyItemRangeChanged(param0: number, param1: number, param2: javalangObject): void;
						public notifyChanged(): void;
						public notifyItemRangeRemoved(param0: number, param1: number): void;
					}
					export abstract class AdapterDataObserver extends javalangObject {
						public onItemRangeChanged(param0: number, param1: number, param2: javalangObject): void;
						public constructor();
						public onChanged(): void;
						public onItemRangeMoved(param0: number, param1: number, param2: number): void;
						public onItemRangeChanged(param0: number, param1: number): void;
						public onItemRangeInserted(param0: number, param1: number): void;
						public onItemRangeRemoved(param0: number, param1: number): void;
					}
					export class ChildDrawingOrderCallback extends javalangObject {
						/**
						 * Constructs a new instance of the android.support.v7.widget.RecyclerView$ChildDrawingOrderCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onGetChildDrawingOrder(param0: number, param1: number): number;
						});
						public onGetChildDrawingOrder(param0: number, param1: number): number;
					}
					export abstract class ItemAnimator extends javalangObject {
						public static FLAG_CHANGED: number;
						public static FLAG_REMOVED: number;
						public static FLAG_INVALIDATED: number;
						public static FLAG_MOVED: number;
						public static FLAG_APPEARED_IN_PRE_LAYOUT: number;
						public setMoveDuration(param0: number): void;
						public animatePersistence(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
						public dispatchAnimationStarted(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public getMoveDuration(): number;
						public endAnimations(): void;
						public animateAppearance(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
						public isRunning(): boolean;
						public runPendingAnimations(): void;
						public animateDisappearance(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param2: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
						public onAnimationFinished(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public getAddDuration(): number;
						public setAddDuration(param0: number): void;
						public canReuseUpdatedViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: javautilList<any>): boolean;
						public setChangeDuration(param0: number): void;
						public recordPostLayoutInformation(param0: android.support.v7.widget.RecyclerView.State, param1: android.support.v7.widget.RecyclerView.ViewHolder): android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
						public recordPreLayoutInformation(param0: android.support.v7.widget.RecyclerView.State, param1: android.support.v7.widget.RecyclerView.ViewHolder, param2: number, param3: javautilList<any>): android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
						public dispatchAnimationsFinished(): void;
						public getChangeDuration(): number;
						public constructor();
						public obtainHolderInfo(): android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
						public dispatchAnimationFinished(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public canReuseUpdatedViewHolder(param0: android.support.v7.widget.RecyclerView.ViewHolder): boolean;
						public endAnimation(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public setRemoveDuration(param0: number): void;
						public animateChange(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: android.support.v7.widget.RecyclerView.ViewHolder, param2: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo, param3: android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo): boolean;
						public onAnimationStarted(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public isRunning(param0: android.support.v7.widget.RecyclerView.ItemAnimator.ItemAnimatorFinishedListener): boolean;
						public getRemoveDuration(): number;
					}
					export module ItemAnimator {
						export class AdapterChanges extends javalangObject implements javalangannotationAnnotation {
							/**
							 * Constructs a new instance of the android.support.v7.widget.RecyclerView$ItemAnimator$AdapterChanges interface with the provided implementation.
							 */
							public constructor(implementation: {
								annotationType(): javalangClass<any>;
								equals(param0: javalangObject): boolean;
								hashCode(): number;
								toString(): string;
							});
							public annotationType(): javalangClass<any>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: javalangObject): boolean;
						}
						export class ItemAnimatorFinishedListener extends javalangObject {
							/**
							 * Constructs a new instance of the android.support.v7.widget.RecyclerView$ItemAnimator$ItemAnimatorFinishedListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onAnimationsFinished(): void;
							});
							public onAnimationsFinished(): void;
						}
						export class ItemAnimatorListener extends javalangObject {
							/**
							 * Constructs a new instance of the android.support.v7.widget.RecyclerView$ItemAnimator$ItemAnimatorListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onAnimationFinished(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
							});
							public onAnimationFinished(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						}
						export class ItemHolderInfo extends javalangObject {
							public left: number;
							public top: number;
							public right: number;
							public bottom: number;
							public changeFlags: number;
							public constructor();
							public setFrom(param0: android.support.v7.widget.RecyclerView.ViewHolder, param1: number): android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
							public setFrom(param0: android.support.v7.widget.RecyclerView.ViewHolder): android.support.v7.widget.RecyclerView.ItemAnimator.ItemHolderInfo;
						}
					}
					export class ItemAnimatorRestoreListener extends javalangObject implements android.support.v7.widget.RecyclerView.ItemAnimator.ItemAnimatorListener {
						public onAnimationFinished(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					}
					export abstract class ItemDecoration extends javalangObject {
						public onDrawOver(param0: android.graphics.Canvas, param1: android.support.v7.widget.RecyclerView, param2: android.support.v7.widget.RecyclerView.State): void;
						public constructor();
						public onDraw(param0: android.graphics.Canvas, param1: android.support.v7.widget.RecyclerView): void;
						public getItemOffsets(param0: android.graphics.Rect, param1: android.view.View, param2: android.support.v7.widget.RecyclerView, param3: android.support.v7.widget.RecyclerView.State): void;
						public onDraw(param0: android.graphics.Canvas, param1: android.support.v7.widget.RecyclerView, param2: android.support.v7.widget.RecyclerView.State): void;
						public onDrawOver(param0: android.graphics.Canvas, param1: android.support.v7.widget.RecyclerView): void;
						public getItemOffsets(param0: android.graphics.Rect, param1: number, param2: android.support.v7.widget.RecyclerView): void;
					}
					export abstract class LayoutManager extends javalangObject {
						public onMeasure(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: number, param3: number): void;
						public isLayoutHierarchical(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): boolean;
						public measureChildWithMargins(param0: android.view.View, param1: number, param2: number): void;
						public onItemsRemoved(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
						public getPaddingBottom(): number;
						public onSaveInstanceState(): android.os.Parcelable;
						public onInitializeAccessibilityNodeInfoForItem(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.View, param3: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public addView(param0: android.view.View): void;
						public computeVerticalScrollExtent(param0: android.support.v7.widget.RecyclerView.State): number;
						public getRowCountForAccessibility(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): number;
						public layoutDecorated(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public generateDefaultLayoutParams(): android.support.v7.widget.RecyclerView.LayoutParams;
						public constructor();
						public onDetachedFromWindow(param0: android.support.v7.widget.RecyclerView): void;
						public postOnAnimation(param0: javalangRunnable): void;
						public isAutoMeasureEnabled(): boolean;
						public onItemsAdded(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
						public getDecoratedBottom(param0: android.view.View): number;
						public isSmoothScrolling(): boolean;
						public detachAndScrapAttachedViews(param0: android.support.v7.widget.RecyclerView.Recycler): void;
						public getFocusedChild(): android.view.View;
						public requestLayout(): void;
						public onItemsMoved(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number, param3: number): void;
						public attachView(param0: android.view.View, param1: number): void;
						public removeAndRecycleAllViews(param0: android.support.v7.widget.RecyclerView.Recycler): void;
						public static getChildMeasureSpec(param0: number, param1: number, param2: number, param3: boolean): number;
						public generateLayoutParams(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.RecyclerView.LayoutParams;
						public getPaddingTop(): number;
						public computeHorizontalScrollOffset(param0: android.support.v7.widget.RecyclerView.State): number;
						public onAddFocusables(param0: android.support.v7.widget.RecyclerView, param1: javautilArrayList<any>, param2: number, param3: number): boolean;
						public getMinimumWidth(): number;
						public removeViewAt(param0: number): void;
						public getPaddingLeft(): number;
						public setMeasuredDimension(param0: number, param1: number): void;
						public isFocused(): boolean;
						public onItemsUpdated(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number, param3: javalangObject): void;
						public getDecoratedLeft(param0: android.view.View): number;
						public scrollHorizontallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
						public isMeasurementCacheEnabled(): boolean;
						public removeAndRecycleViewAt(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler): void;
						public assertInLayoutOrScroll(param0: string): void;
						public performAccessibilityAction(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: number, param3: android.os.Bundle): boolean;
						public onItemsChanged(param0: android.support.v7.widget.RecyclerView): void;
						public canScrollVertically(): boolean;
						public onDetachedFromWindow(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.Recycler): void;
						public getChildCount(): number;
						public getRightDecorationWidth(param0: android.view.View): number;
						public getWidthMode(): number;
						public getHeight(): number;
						public calculateItemDecorationsForChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public supportsPredictiveItemAnimations(): boolean;
						public removeAllViews(): void;
						public onScrollStateChanged(param0: number): void;
						public getItemCount(): number;
						public getColumnCountForAccessibility(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): number;
						public findContainingItemView(param0: android.view.View): android.view.View;
						public removeAndRecycleView(param0: android.view.View, param1: android.support.v7.widget.RecyclerView.Recycler): void;
						public requestChildRectangleOnScreen(param0: android.support.v7.widget.RecyclerView, param1: android.view.View, param2: android.graphics.Rect, param3: boolean): boolean;
						public startSmoothScroll(param0: android.support.v7.widget.RecyclerView.SmoothScroller): void;
						public getLayoutDirection(): number;
						public getPosition(param0: android.view.View): number;
						public checkLayoutParams(param0: android.support.v7.widget.RecyclerView.LayoutParams): boolean;
						public detachAndScrapViewAt(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler): void;
						public setMeasurementCacheEnabled(param0: boolean): void;
						public computeHorizontalScrollExtent(param0: android.support.v7.widget.RecyclerView.State): number;
						public getItemViewType(param0: android.view.View): number;
						public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.RecyclerView.LayoutParams;
						public getBaseline(): number;
						public getTopDecorationHeight(param0: android.view.View): number;
						public setAutoMeasureEnabled(param0: boolean): void;
						public removeCallbacks(param0: javalangRunnable): boolean;
						public onRequestChildFocus(param0: android.support.v7.widget.RecyclerView, param1: android.view.View, param2: android.view.View): boolean;
						public addDisappearingView(param0: android.view.View, param1: number): void;
						public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
						public getPaddingRight(): number;
						public getChildAt(param0: number): android.view.View;
						public ignoreView(param0: android.view.View): void;
						public onInitializeAccessibilityEvent(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.accessibility.AccessibilityEvent): void;
						public offsetChildrenHorizontal(param0: number): void;
						public onFocusSearchFailed(param0: android.view.View, param1: number, param2: android.support.v7.widget.RecyclerView.Recycler, param3: android.support.v7.widget.RecyclerView.State): android.view.View;
						public onAdapterChanged(param0: android.support.v7.widget.RecyclerView.Adapter, param1: android.support.v7.widget.RecyclerView.Adapter): void;
						public removeView(param0: android.view.View): void;
						public detachAndScrapView(param0: android.view.View, param1: android.support.v7.widget.RecyclerView.Recycler): void;
						public onInitializeAccessibilityNodeInfo(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
						public getPaddingEnd(): number;
						public onLayoutChildren(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): void;
						public computeVerticalScrollRange(param0: android.support.v7.widget.RecyclerView.State): number;
						public getClipToPadding(): boolean;
						public onRequestChildFocus(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.View, param3: android.view.View): boolean;
						public attachView(param0: android.view.View, param1: number, param2: android.support.v7.widget.RecyclerView.LayoutParams): void;
						public static getChildMeasureSpec(param0: number, param1: number, param2: number, param3: number, param4: boolean): number;
						public isAttachedToWindow(): boolean;
						public addView(param0: android.view.View, param1: number): void;
						public attachView(param0: android.view.View): void;
						public setMeasuredDimension(param0: android.graphics.Rect, param1: number, param2: number): void;
						public removeDetachedView(param0: android.view.View): void;
						public endAnimation(param0: android.view.View): void;
						public offsetChildrenVertical(param0: number): void;
						public static getProperties(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number): android.support.v7.widget.RecyclerView.LayoutManager.Properties;
						public moveView(param0: number, param1: number): void;
						public getHeightMode(): number;
						public computeVerticalScrollOffset(param0: android.support.v7.widget.RecyclerView.State): number;
						public scrollToPosition(param0: number): void;
						public scrollVerticallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
						public assertNotInLayoutOrScroll(param0: string): void;
						public getDecoratedTop(param0: android.view.View): number;
						public onInterceptFocusSearch(param0: android.view.View, param1: number): android.view.View;
						public requestSimpleAnimationsInNextLayout(): void;
						public smoothScrollToPosition(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.State, param2: number): void;
						public computeHorizontalScrollRange(param0: android.support.v7.widget.RecyclerView.State): number;
						public performAccessibilityActionForItem(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.View, param3: number, param4: android.os.Bundle): boolean;
						public onItemsUpdated(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
						public getSelectionModeForAccessibility(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): number;
						public hasFocus(): boolean;
						public getMinimumHeight(): number;
						public detachView(param0: android.view.View): void;
						public stopIgnoringView(param0: android.view.View): void;
						public measureChild(param0: android.view.View, param1: number, param2: number): void;
						public getBottomDecorationHeight(param0: android.view.View): number;
						public onAttachedToWindow(param0: android.support.v7.widget.RecyclerView): void;
						public getDecoratedMeasuredHeight(param0: android.view.View): number;
						public canScrollHorizontally(): boolean;
						public detachViewAt(param0: number): void;
						public static chooseSize(param0: number, param1: number, param2: number): number;
						public getWidth(): number;
						public addDisappearingView(param0: android.view.View): void;
						public getPaddingStart(): number;
						public getDecoratedRight(param0: android.view.View): number;
						public getLeftDecorationWidth(param0: android.view.View): number;
						public getDecoratedMeasuredWidth(param0: android.view.View): number;
						public onRestoreInstanceState(param0: android.os.Parcelable): void;
						public findViewByPosition(param0: number): android.view.View;
					}
					export module LayoutManager {
						export class Properties extends javalangObject {
							public orientation: number;
							public spanCount: number;
							public reverseLayout: boolean;
							public stackFromEnd: boolean;
							public constructor();
						}
					}
					export class LayoutParams extends android.view.ViewGroup.MarginLayoutParams {
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public isItemChanged(): boolean;
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public isItemRemoved(): boolean;
						public getViewPosition(): number;
						public getViewAdapterPosition(): number;
						public isViewInvalid(): boolean;
						public constructor(param0: android.support.v7.widget.RecyclerView.LayoutParams);
						public getViewLayoutPosition(): number;
						public viewNeedsUpdate(): boolean;
						public constructor(param0: number, param1: number);
					}
					export class OnChildAttachStateChangeListener extends javalangObject {
						/**
						 * Constructs a new instance of the android.support.v7.widget.RecyclerView$OnChildAttachStateChangeListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onChildViewAttachedToWindow(param0: android.view.View): void;
							onChildViewDetachedFromWindow(param0: android.view.View): void;
						});
						public onChildViewAttachedToWindow(param0: android.view.View): void;
						public onChildViewDetachedFromWindow(param0: android.view.View): void;
					}
					export class OnItemTouchListener extends javalangObject {
						/**
						 * Constructs a new instance of the android.support.v7.widget.RecyclerView$OnItemTouchListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onInterceptTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): boolean;
							onTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): void;
							onRequestDisallowInterceptTouchEvent(param0: boolean): void;
						});
						public onInterceptTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): boolean;
						public onTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): void;
						public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
					}
					export abstract class OnScrollListener extends javalangObject {
						public constructor();
						public onScrolled(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
						public onScrollStateChanged(param0: android.support.v7.widget.RecyclerView, param1: number): void;
					}
					export class RecycledViewPool extends javalangObject {
						public constructor();
						public putRecycledView(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						public clear(): void;
						public setMaxRecycledViews(param0: number, param1: number): void;
						public getRecycledView(param0: number): android.support.v7.widget.RecyclerView.ViewHolder;
					}
					export class Recycler extends javalangObject {
						public getViewForPosition(param0: number): android.view.View;
						public recycleView(param0: android.view.View): void;
						public constructor(param0: android.support.v7.widget.RecyclerView);
						public setViewCacheSize(param0: number): void;
						public getScrapList(): javautilList<any>;
						public clear(): void;
						public bindViewToPosition(param0: android.view.View, param1: number): void;
						public convertPreLayoutPositionToPostLayout(param0: number): number;
					}
					export class RecyclerListener extends javalangObject {
						/**
						 * Constructs a new instance of the android.support.v7.widget.RecyclerView$RecyclerListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onViewRecycled(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
						});
						public onViewRecycled(param0: android.support.v7.widget.RecyclerView.ViewHolder): void;
					}
					export class RecyclerViewDataObserver extends android.support.v7.widget.RecyclerView.AdapterDataObserver {
						public onItemRangeChanged(param0: number, param1: number, param2: javalangObject): void;
						public onChanged(): void;
						public onItemRangeMoved(param0: number, param1: number, param2: number): void;
						public onItemRangeChanged(param0: number, param1: number): void;
						public onItemRangeInserted(param0: number, param1: number): void;
						public onItemRangeRemoved(param0: number, param1: number): void;
					}
					export class SavedState extends android.view.View.BaseSavedState {
						public static CREATOR: android.os.Parcelable.Creator<any>;
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
					}
					export class SimpleOnItemTouchListener extends javalangObject implements android.support.v7.widget.RecyclerView.OnItemTouchListener {
						public constructor();
						public onInterceptTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): boolean;
						public onTouchEvent(param0: android.support.v7.widget.RecyclerView, param1: android.view.MotionEvent): void;
						public onRequestDisallowInterceptTouchEvent(param0: boolean): void;
					}
					export abstract class SmoothScroller extends javalangObject {
						public onTargetFound(param0: android.view.View, param1: android.support.v7.widget.RecyclerView.State, param2: android.support.v7.widget.RecyclerView.SmoothScroller.Action): void;
						public constructor();
						public getChildCount(): number;
						public getLayoutManager(): android.support.v7.widget.RecyclerView.LayoutManager;
						public onSeekTargetStep(param0: number, param1: number, param2: android.support.v7.widget.RecyclerView.State, param3: android.support.v7.widget.RecyclerView.SmoothScroller.Action): void;
						public onChildAttachedToWindow(param0: android.view.View): void;
						public stop(): void;
						public isRunning(): boolean;
						public onStop(): void;
						public setTargetPosition(param0: number): void;
						public getChildPosition(param0: android.view.View): number;
						public instantScrollToPosition(param0: number): void;
						public isPendingInitialRun(): boolean;
						public normalize(param0: android.graphics.PointF): void;
						public getTargetPosition(): number;
						public findViewByPosition(param0: number): android.view.View;
						public onStart(): void;
					}
					export module SmoothScroller {
						export class Action extends javalangObject {
							public static UNDEFINED_DURATION: number;
							public constructor(param0: number, param1: number);
							public setDuration(param0: number): void;
							public getInterpolator(): android.view.animation.Interpolator;
							public setDy(param0: number): void;
							public update(param0: number, param1: number, param2: number, param3: android.view.animation.Interpolator): void;
							public getDx(): number;
							public constructor(param0: number, param1: number, param2: number);
							public constructor(param0: number, param1: number, param2: number, param3: android.view.animation.Interpolator);
							public setDx(param0: number): void;
							public getDy(): number;
							public setInterpolator(param0: android.view.animation.Interpolator): void;
							public getDuration(): number;
							public jumpTo(param0: number): void;
						}
					}
					export class State extends javalangObject {
						public constructor();
						public isMeasuring(): boolean;
						public toString(): string;
						public getTargetScrollPosition(): number;
						public willRunPredictiveAnimations(): boolean;
						public get(param0: number): javalangObject;
						public hasTargetScrollPosition(): boolean;
						public willRunSimpleAnimations(): boolean;
						public getItemCount(): number;
						public didStructureChange(): boolean;
						public isPreLayout(): boolean;
						public remove(param0: number): void;
						public put(param0: number, param1: javalangObject): void;
					}
					export abstract class ViewCacheExtension extends javalangObject {
						public constructor();
						public getViewForPositionAndType(param0: android.support.v7.widget.RecyclerView.Recycler, param1: number, param2: number): android.view.View;
					}
					export class ViewFlinger extends javalangObject implements javalangRunnable {
						public smoothScrollBy(param0: number, param1: number, param2: number): void;
						public run(): void;
						public constructor(param0: android.support.v7.widget.RecyclerView);
						public smoothScrollBy(param0: number, param1: number, param2: number, param3: number): void;
						public smoothScrollBy(param0: number, param1: number): void;
						public smoothScrollBy(param0: number, param1: number, param2: number, param3: android.view.animation.Interpolator): void;
						public fling(param0: number, param1: number): void;
						public stop(): void;
					}
					export abstract class ViewHolder extends javalangObject {
						public itemView: android.view.View;
						public isRecyclable(): boolean;
						public getAdapterPosition(): number;
						public constructor(param0: android.view.View);
						public getItemViewType(): number;
						public setIsRecyclable(param0: boolean): void;
						public getPosition(): number;
						public getLayoutPosition(): number;
						public getOldPosition(): number;
						public toString(): string;
						public getItemId(): number;
					}
				}
			}
		}
	}
}

import androidsupportv7widgetRecyclerViewLayoutParams = android.support.v7.widget.RecyclerView.LayoutParams;
import androidsupportv7widgetRecyclerView = android.support.v7.widget.RecyclerView;
import androidsupportv7widgetRecyclerViewState = android.support.v7.widget.RecyclerView.State;
import androidgraphicsPointF = android.graphics.PointF;
import androidsupportv7widgetRecyclerViewRecycler = android.support.v7.widget.RecyclerView.Recycler;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.list.PerspectiveChangeInfo.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class DeckOfCardsLayoutManager extends com.telerik.widget.list.SlideLayoutManagerBase {
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public setPerspectiveItemsCount(param0: number): void;
					public constructor(param0: androidcontentContext, param1: number, param2: boolean);
					public computeVerticalScrollOffset(param0: androidsupportv7widgetRecyclerViewState): number;
					public scaleXForIndex(param0: number): number;
					public alphaForIndex(param0: number): number;
					public isAutoDissolveFrontView(): boolean;
					public computeHorizontalScrollExtent(param0: androidsupportv7widgetRecyclerViewState): number;
					public elevationForIndex(param0: number): number;
					public canScroll(param0: number): boolean;
					public nextIndex(param0: number): number;
					public fill(param0: number, param1: androidsupportv7widgetRecyclerViewRecycler, param2: androidsupportv7widgetRecyclerViewState): void;
					public smoothScrollToPosition(param0: androidsupportv7widgetRecyclerView, param1: androidsupportv7widgetRecyclerViewState, param2: number): void;
					public scaleYForIndex(param0: number): number;
					public calculateFrontViewSize(): void;
					public onRestoreInstanceState(param0: androidosParcelable): void;
					public setAutoDissolveFrontView(param0: boolean): void;
					public onSaveInstanceState(): androidosParcelable;
					public constructor();
					public calculateScrollProgress(): number;
					public translationXForIndex(param0: number): number;
					public translationYForIndex(param0: number): number;
					public computeVerticalScrollRange(param0: androidsupportv7widgetRecyclerViewState): number;
					public computeScrollVectorForPosition(param0: number): androidgraphicsPointF;
					public getDirection(param0: number): number;
					public previousItemsCount(): number;
					public computeHorizontalScrollOffset(param0: androidsupportv7widgetRecyclerViewState): number;
					public handleItemRemoved(param0: number, param1: androidsupportv7widgetRecyclerViewRecycler, param2: androidsupportv7widgetRecyclerViewState): void;
					public layoutView(param0: androidviewView): void;
					public previousIndex(param0: number): number;
					public generateDefaultLayoutParams(): androidsupportv7widgetRecyclerViewLayoutParams;
					public animationDuration(): number;
					public layoutIndexForAdapterPosition(param0: number): number;
					public computeVerticalScrollExtent(param0: androidsupportv7widgetRecyclerViewState): number;
					public nextItemsCount(): number;
					public computeHorizontalScrollRange(param0: androidsupportv7widgetRecyclerViewState): number;
					public constructor(param0: androidcontentContext);
					public perspective(): com.telerik.widget.list.PerspectiveChangeInfo;
					public getPerspectiveItemsCount(): number;
					public adapterPositionForLayoutIndex(param0: number): number;
				}
			}
		}
	}
}

/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./any.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
	export module support {
		export module v4 {
			export module view {
				export class ViewPropertyAnimatorCompat extends javalangObject {
					public withLayer(): android.support.v4.view.ViewPropertyAnimatorCompat;
					public alphaBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setStartDelay(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleXBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setDuration(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public xBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public start(): void;
					public rotationYBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public rotationBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationZBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public getDuration(): number;
					public rotationXBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public withEndAction(param0: javalangRunnable): android.support.v4.view.ViewPropertyAnimatorCompat;
					public getStartDelay(): number;
					public setListener(param0: any): android.support.v4.view.ViewPropertyAnimatorCompat;
					public rotationX(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationXBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public zBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public alpha(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleYBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public yBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public getInterpolator(): android.view.animation.Interpolator;
					public rotationY(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public cancel(): void;
					public rotation(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleY(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setInterpolator(param0: android.view.animation.Interpolator): android.support.v4.view.ViewPropertyAnimatorCompat;
					public y(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public z(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public x(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public scaleX(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public setUpdateListener(param0: any): android.support.v4.view.ViewPropertyAnimatorCompat;
					public withStartAction(param0: javalangRunnable): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationYBy(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationZ(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationX(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
					public translationY(param0: number): android.support.v4.view.ViewPropertyAnimatorCompat;
				}
				export module ViewPropertyAnimatorCompat {
					export class BaseViewPropertyAnimatorCompatImpl extends javalangObject implements android.support.v4.view.ViewPropertyAnimatorCompat.ViewPropertyAnimatorCompatImpl {
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
					}
					export module BaseViewPropertyAnimatorCompatImpl {
						export class Starter extends javalangObject implements javalangRunnable {
							public run(): void;
						}
					}
					export class ICSViewPropertyAnimatorCompatImpl extends android.support.v4.view.ViewPropertyAnimatorCompat.BaseViewPropertyAnimatorCompatImpl {
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
					}
					export module ICSViewPropertyAnimatorCompatImpl {
						export class MyVpaListener extends javalangObject {
							public onAnimationCancel(param0: android.view.View): void;
							public onAnimationEnd(param0: android.view.View): void;
							public onAnimationStart(param0: android.view.View): void;
						}
					}
					export class JBMr2ViewPropertyAnimatorCompatImpl extends android.support.v4.view.ViewPropertyAnimatorCompat.JBViewPropertyAnimatorCompatImpl {
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
					}
					export class JBViewPropertyAnimatorCompatImpl extends android.support.v4.view.ViewPropertyAnimatorCompat.ICSViewPropertyAnimatorCompatImpl {
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
					}
					export class KitKatViewPropertyAnimatorCompatImpl extends android.support.v4.view.ViewPropertyAnimatorCompat.JBMr2ViewPropertyAnimatorCompatImpl {
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
					}
					export class LollipopViewPropertyAnimatorCompatImpl extends android.support.v4.view.ViewPropertyAnimatorCompat.KitKatViewPropertyAnimatorCompatImpl {
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
					}
					export class ViewPropertyAnimatorCompatImpl extends javalangObject {
						/**
						 * Constructs a new instance of the android.support.v4.view.ViewPropertyAnimatorCompat$ViewPropertyAnimatorCompatImpl interface with the provided implementation.
						 */
						public constructor(implementation: {
							setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
							setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
							getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
							setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
							alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
							x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
							start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
							withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
							withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
							withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
							setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
							setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						});
						public zBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public y(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: android.view.animation.Interpolator): void;
						public setUpdateListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setListener(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: any): void;
						public setDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public scaleY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public setStartDelay(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotation(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withEndAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public rotationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withLayer(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getInterpolator(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): android.view.animation.Interpolator;
						public start(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public alpha(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public rotationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public x(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationX(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public withStartAction(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: javalangRunnable): void;
						public alphaBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public xBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public scaleXBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public cancel(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): void;
						public rotationY(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZ(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationYBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public yBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public getDuration(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View): number;
						public z(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
						public translationZBy(param0: android.support.v4.view.ViewPropertyAnimatorCompat, param1: android.view.View, param2: number): void;
					}
				}
			}
		}
	}
}

import androidsupportv7widgetRecyclerViewViewHolder = android.support.v7.widget.RecyclerView.ViewHolder;
import androidsupportv4viewViewPropertyAnimatorCompat = android.support.v4.view.ViewPropertyAnimatorCompat;

/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class FadeItemAnimator extends com.telerik.widget.list.ListViewItemAnimator {
					public getAlpha(): number;
					public constructor();
					public addAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): androidsupportv4viewViewPropertyAnimatorCompat;
					public animateViewAddedPrepare(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public onAnimationAddCancelled(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public removeAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): androidsupportv4viewViewPropertyAnimatorCompat;
					public onAnimationAddEnded(param0: androidsupportv4viewViewPropertyAnimatorCompat, param1: androidsupportv7widgetRecyclerViewViewHolder): void;
					public onAnimationRemoveEnded(param0: androidsupportv4viewViewPropertyAnimatorCompat, param1: androidsupportv7widgetRecyclerViewViewHolder): void;
					public setAlpha(param0: number): void;
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.list.ListViewItemAnimator.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ItemAnimatorSet extends com.telerik.widget.list.ListViewItemAnimator {
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public constructor();
					public removeAnimator(param0: com.telerik.widget.list.ListViewItemAnimator): void;
					public clearAnimators(): void;
					public animateViewAddedImpl(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public animateViewRemovedImpl(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public animateViewAddedPrepare(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
					public endAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public addAnimator(param0: com.telerik.widget.list.ListViewItemAnimator): void;
				}
			}
		}
	}
}

import androidgraphicsCanvas = android.graphics.Canvas;
import androidgraphicsdrawableBitmapDrawable = android.graphics.drawable.BitmapDrawable;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.BitmapDrawable.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ItemReorderBehavior extends com.telerik.widget.list.ListViewBehavior {
					public endReorder(param0: boolean): void;
					public removeListener(param0: com.telerik.widget.list.ItemReorderBehavior.ItemReorderListener): void;
					public onLongPress(param0: androidviewMotionEvent): void;
					public getScrollValue(): number;
					public onFling(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
					public setScrollValue(param0: number): void;
					public isInProgress(): boolean;
					public startReorder(param0: number, param1: number): void;
					public moveReorderImage(param0: number, param1: number, param2: number, param3: number): void;
					public constructor();
					public onDispatchDraw(param0: androidgraphicsCanvas): void;
					public onLongPressDragEnded(param0: boolean): boolean;
					public onLongPressDrag(param0: number, param1: number, param2: number, param3: number): void;
					public addListener(param0: com.telerik.widget.list.ItemReorderBehavior.ItemReorderListener): void;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
					public createReorderImage(param0: androidviewView): androidgraphicsdrawableBitmapDrawable;
				}
				export module ItemReorderBehavior {
					export class ItemReorderListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.ItemReorderBehavior$ItemReorderListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onReorderStarted(param0: number): void;
							onReorderItem(param0: number, param1: number): void;
							onReorderFinished(): void;
						});
						public onReorderFinished(): void;
						public onReorderStarted(param0: number): void;
						public onReorderItem(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class StaggeredGridLayoutManager extends android.support.v7.widget.RecyclerView.LayoutManager {
					public static TAG: string;
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static GAP_HANDLING_NONE: number;
					public static GAP_HANDLING_LAZY: number;
					public static GAP_HANDLING_MOVE_ITEMS_BETWEEN_SPANS: number;
					public setMeasuredDimension(param0: number, param1: number): void;
					public findLastCompletelyVisibleItemPositions(param0: native.Array<number>): native.Array<number>;
					public computeVerticalScrollOffset(param0: android.support.v7.widget.RecyclerView.State): number;
					public onItemsChanged(param0: android.support.v7.widget.RecyclerView): void;
					public onItemsUpdated(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
					public invalidateSpanAssignments(): void;
					public computeHorizontalScrollRange(param0: android.support.v7.widget.RecyclerView.State): number;
					public supportsPredictiveItemAnimations(): boolean;
					public checkLayoutParams(param0: android.support.v7.widget.RecyclerView.LayoutParams): boolean;
					public setReverseLayout(param0: boolean): void;
					public scrollToPositionWithOffset(param0: number, param1: number): void;
					public findFirstCompletelyVisibleItemPositions(param0: native.Array<number>): native.Array<number>;
					public scrollToPosition(param0: number): void;
					public onItemsAdded(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
					public scrollVerticallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
					public constructor();
					public getRowCountForAccessibility(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): number;
					public computeHorizontalScrollOffset(param0: android.support.v7.widget.RecyclerView.State): number;
					public getOrientation(): number;
					public constructor(param0: number, param1: number);
					public canScrollVertically(): boolean;
					public onScrollStateChanged(param0: number): void;
					public offsetChildrenHorizontal(param0: number): void;
					public getSpanCount(): number;
					public onFocusSearchFailed(param0: android.view.View, param1: number, param2: android.support.v7.widget.RecyclerView.Recycler, param3: android.support.v7.widget.RecyclerView.State): android.view.View;
					public generateDefaultLayoutParams(): android.support.v7.widget.RecyclerView.LayoutParams;
					public setOrientation(param0: number): void;
					public findFirstVisibleItemPositions(param0: native.Array<number>): native.Array<number>;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public setGapStrategy(param0: number): void;
					public getGapStrategy(): number;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.RecyclerView.LayoutParams;
					public onItemsRemoved(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
					public canScrollHorizontally(): boolean;
					public offsetChildrenVertical(param0: number): void;
					public onDetachedFromWindow(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.Recycler): void;
					public onSaveInstanceState(): android.os.Parcelable;
					public onInitializeAccessibilityEvent(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.accessibility.AccessibilityEvent): void;
					public computeHorizontalScrollExtent(param0: android.support.v7.widget.RecyclerView.State): number;
					public onItemsMoved(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number, param3: number): void;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public assertNotInLayoutOrScroll(param0: string): void;
					public getReverseLayout(): boolean;
					public onInitializeAccessibilityNodeInfoForItem(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.View, param3: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
					public scrollHorizontallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
					public computeVerticalScrollRange(param0: android.support.v7.widget.RecyclerView.State): number;
					public setSpanCount(param0: number): void;
					public smoothScrollToPosition(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.State, param2: number): void;
					public onDetachedFromWindow(param0: android.support.v7.widget.RecyclerView): void;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public generateLayoutParams(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.RecyclerView.LayoutParams;
					public setMeasuredDimension(param0: android.graphics.Rect, param1: number, param2: number): void;
					public computeVerticalScrollExtent(param0: android.support.v7.widget.RecyclerView.State): number;
					public getColumnCountForAccessibility(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): number;
					public onItemsUpdated(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number, param3: javalangObject): void;
					public onLayoutChildren(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): void;
					public findLastVisibleItemPositions(param0: native.Array<number>): native.Array<number>;
				}
				export module StaggeredGridLayoutManager {
					export class AnchorInfo extends javalangObject {
					}
					export class LayoutParams extends android.support.v7.widget.RecyclerView.LayoutParams {
						public static INVALID_SPAN_ID: number;
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public isFullSpan(): boolean;
						public getSpanIndex(): number;
						public constructor(param0: android.support.v7.widget.RecyclerView.LayoutParams);
						public constructor(param0: number, param1: number);
						public setFullSpan(param0: boolean): void;
					}
					export class LazySpanLookup extends javalangObject {
						public addFullSpanItem(param0: android.support.v7.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem): void;
						public getFirstFullSpanItemInRange(param0: number, param1: number, param2: number, param3: boolean): android.support.v7.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem;
						public getFullSpanItem(param0: number): android.support.v7.widget.StaggeredGridLayoutManager.LazySpanLookup.FullSpanItem;
					}
					export module LazySpanLookup {
						export class FullSpanItem extends javalangObject implements android.os.Parcelable {
							public static CREATOR: android.os.Parcelable.Creator<any>;
							public constructor();
							public describeContents(): number;
							public toString(): string;
							public writeToParcel(param0: android.os.Parcel, param1: number): void;
							public constructor(param0: android.os.Parcel);
						}
					}
					export class SavedState extends javalangObject implements android.os.Parcelable {
						public static CREATOR: android.os.Parcelable.Creator<any>;
						public constructor();
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public constructor(param0: android.support.v7.widget.StaggeredGridLayoutManager.SavedState);
					}
					export class Span extends javalangObject {
						public getFocusableViewAfter(param0: number, param1: number): android.view.View;
						public findLastCompletelyVisibleItemPosition(): number;
						public findFirstCompletelyVisibleItemPosition(): number;
						public getDeletedSize(): number;
						public findFirstVisibleItemPosition(): number;
						public findLastVisibleItemPosition(): number;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.support.v4.view.accessibility.AccessibilityNodeInfoCompat.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class GridLayoutManager extends android.support.v7.widget.LinearLayoutManager {
					public static DEFAULT_SPAN_COUNT: number;
					public setMeasuredDimension(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: number);
					public onItemsChanged(param0: android.support.v7.widget.RecyclerView): void;
					public onItemsUpdated(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
					public onItemsMoved(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number, param3: number): void;
					public setSpanSizeLookup(param0: android.support.v7.widget.GridLayoutManager.SpanSizeLookup): void;
					public supportsPredictiveItemAnimations(): boolean;
					public checkLayoutParams(param0: android.support.v7.widget.RecyclerView.LayoutParams): boolean;
					public constructor(param0: android.content.Context, param1: number, param2: number, param3: boolean);
					public onItemsAdded(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
					public scrollVerticallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
					public onInitializeAccessibilityNodeInfoForItem(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.View, param3: android.support.v4.view.accessibility.AccessibilityNodeInfoCompat): void;
					public scrollHorizontallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
					public constructor();
					public getRowCountForAccessibility(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): number;
					public prepareForDrop(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
					public setSpanCount(param0: number): void;
					public setStackFromEnd(param0: boolean): void;
					public getSpanCount(): number;
					public onFocusSearchFailed(param0: android.view.View, param1: number, param2: android.support.v7.widget.RecyclerView.Recycler, param3: android.support.v7.widget.RecyclerView.State): android.view.View;
					public constructor(param0: android.content.Context, param1: number, param2: boolean);
					public generateDefaultLayoutParams(): android.support.v7.widget.RecyclerView.LayoutParams;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public generateLayoutParams(param0: android.content.Context, param1: android.util.AttributeSet): android.support.v7.widget.RecyclerView.LayoutParams;
					public generateLayoutParams(param0: android.view.ViewGroup.LayoutParams): android.support.v7.widget.RecyclerView.LayoutParams;
					public setMeasuredDimension(param0: android.graphics.Rect, param1: number, param2: number): void;
					public onItemsRemoved(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number): void;
					public constructor(param0: android.content.Context);
					public getSpanSizeLookup(): android.support.v7.widget.GridLayoutManager.SpanSizeLookup;
					public getColumnCountForAccessibility(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): number;
					public onItemsUpdated(param0: android.support.v7.widget.RecyclerView, param1: number, param2: number, param3: javalangObject): void;
					public onLayoutChildren(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): void;
				}
				export module GridLayoutManager {
					export class DefaultSpanSizeLookup extends android.support.v7.widget.GridLayoutManager.SpanSizeLookup {
						public getSpanIndex(param0: number, param1: number): number;
						public getSpanSize(param0: number): number;
						public constructor();
					}
					export class LayoutParams extends android.support.v7.widget.RecyclerView.LayoutParams {
						public static INVALID_SPAN_ID: number;
						public constructor(param0: android.view.ViewGroup.MarginLayoutParams);
						public constructor(param0: android.view.ViewGroup.LayoutParams);
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getSpanIndex(): number;
						public getSpanSize(): number;
						public constructor(param0: android.support.v7.widget.RecyclerView.LayoutParams);
						public constructor(param0: number, param1: number);
					}
					export abstract class SpanSizeLookup extends javalangObject {
						public getSpanIndex(param0: number, param1: number): number;
						public getSpanSize(param0: number): number;
						public constructor();
						public invalidateSpanIndexCache(): void;
						public setSpanIndexCacheEnabled(param0: boolean): void;
						public getSpanGroupIndex(param0: number, param1: number): number;
						public isSpanIndexCacheEnabled(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.widget.list.ListViewHolder.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ListViewAdapter extends androidsupportv7widgetRecyclerViewAdapter {
					public static ITEM_VIEW_TYPE_HEADER: number;
					public static ITEM_VIEW_TYPE_FOOTER: number;
					public static ITEM_VIEW_TYPE_TOP_INDICATOR: number;
					public static ITEM_VIEW_TYPE_BOTTOM_INDICATOR: number;
					public static ITEM_VIEW_TYPE_SWIPE_CONTENT: number;
					public static ITEM_VIEW_TYPE_EMPTY_CONTENT: number;
					public static ITEM_VIEW_TYPE_COLLAPSED: number;
					public static INVALID_ID: number;
					public constructor(param0: javautilList<any>);
					public getPosition(param0: javalangObject): number;
					public reorderItem(param0: number, param1: number): boolean;
					public notifySwipeExecuteFinished(): void;
					public remove(param0: javalangObject): boolean;
					public notifyRefreshFinished(): void;
					public onCreateSwipeContentHolder(param0: androidviewViewGroup): com.telerik.widget.list.ListViewHolder;
					public notifyLoadingFinished(): void;
					public canReorder(param0: number): boolean;
					public remove(param0: number): javalangObject;
					public getItemId(param0: javalangObject): number;
					public updateSwipeLayoutParams(param0: com.telerik.widget.list.ListViewHolder, param1: boolean): void;
					public canDeselect(param0: number): boolean;
					public add(param0: number, param1: javalangObject): void;
					public onCreateViewHolder(param0: androidviewViewGroup, param1: number): com.telerik.widget.list.ListViewHolder;
					public getItems(): javautilList<any>;
					public getItem(param0: number): javalangObject;
					public updateMainLayoutParams(param0: com.telerik.widget.list.ListViewHolder, param1: boolean): void;
					public onBindViewHolder(param0: com.telerik.widget.list.ListViewHolder, param1: number): void;
					public add(param0: javalangObject): void;
					public getPosition(param0: number): number;
					public canSelect(param0: number): boolean;
					public getItemCount(): number;
					public updateLayoutParams(param0: com.telerik.widget.list.ListViewHolder, param1: boolean): void;
					public onBindSwipeContentHolder(param0: com.telerik.widget.list.ListViewHolder, param1: number): void;
					public getItemId(param0: number): number;
					public setItems(param0: javautilList<any>): void;
					public canSwipe(param0: number): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.widget.list.ListViewHolder.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ListViewBehavior {
					public bindViewHolder(param0: com.telerik.widget.list.ListViewHolder, param1: number): void;
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public onTapUp(param0: androidviewMotionEvent): boolean;
					public onLongPress(param0: androidviewMotionEvent): void;
					public onScrolled(param0: number, param1: number): void;
					public owner(): com.telerik.widget.list.RadListView;
					public createViewHolder(param0: androidviewViewGroup, param1: number): com.telerik.widget.list.ListViewHolder;
					public onFling(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
					public getItemViewType(param0: number, param1: number): number;
					public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
					public isInProgress(): boolean;
					public onSaveInstanceState(param0: androidosParcelable): void;
					public onRestoreInstanceState(param0: androidosParcelable): void;
					public onActionUpOrCancel(param0: boolean): boolean;
					public constructor();
					public onDispatchDraw(param0: androidgraphicsCanvas): void;
					public onLongPressDragEnded(param0: boolean): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onLongPressDrag(param0: number, param1: number, param2: number, param3: number): void;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
					public managesViewHolders(): boolean;
					public onShortPressDrag(param0: number, param1: number, param2: number, param3: number): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.android.common.Function.d.ts" />
/// <reference path="./com.telerik.android.common.Function2.d.ts" />
/// <reference path="./com.telerik.android.data.DataChangeInfo.d.ts" />
/// <reference path="./com.telerik.android.data.DataItem.d.ts" />
/// <reference path="./com.telerik.widget.list.ListViewHolder.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ListViewDataSourceAdapter extends com.telerik.widget.list.ListViewAdapter implements com.telerik.android.data.DataChangedListener {
					public static ITEM_VIEW_TYPE_GROUP: number;
					public addSortDescriptor(param0: com.telerik.android.common.Function2): void;
					public remove(param0: javalangObject, param1: boolean): boolean;
					public onBindGroupViewHolder(param0: com.telerik.widget.list.ListViewHolder, param1: javalangObject): void;
					public constructor(param0: javautilList<any>);
					public getHeaderPosition(param0: number): number;
					public getDataItem(param0: number): com.telerik.android.data.DataItem;
					public getPosition(param0: javalangObject): number;
					public clearFilterDescriptors(): void;
					public reorderItem(param0: number, param1: number): boolean;
					public clearSortDescriptors(): void;
					public remove(param0: javalangObject): boolean;
					public invalidateDescriptors(): void;
					public getGroupViewType(param0: javalangObject): number;
					public onBindItemViewHolder(param0: com.telerik.widget.list.ListViewHolder, param1: javalangObject): void;
					public add(param0: number, param1: javalangObject, param2: boolean): void;
					public getItemViewType(param0: javalangObject): number;
					public getItemViewType(param0: number): number;
					public add(param0: javalangObject, param1: boolean): void;
					public canReorder(param0: number): boolean;
					public remove(param0: number): javalangObject;
					public dataChanged(param0: com.telerik.android.data.DataChangeInfo): void;
					public getItemId(param0: javalangObject): number;
					public addGroupDescriptor(param0: com.telerik.android.common.Function): void;
					public add(param0: number, param1: javalangObject): void;
					public getBaseItemCount(): number;
					public onCreateViewHolder(param0: androidviewViewGroup, param1: number): com.telerik.widget.list.ListViewHolder;
					public removeFilterDescriptor(param0: com.telerik.android.common.Function): void;
					public getItem(param0: number): javalangObject;
					public onCreateGroupViewHolder(param0: androidviewViewGroup, param1: number): com.telerik.widget.list.ListViewHolder;
					public onBindViewHolder(param0: com.telerik.widget.list.ListViewHolder, param1: number): void;
					public removeGroupDescriptor(param0: com.telerik.android.common.Function): void;
					public add(param0: javalangObject): void;
					public isGroupHeader(param0: number): boolean;
					public clearGroupDescriptors(): void;
					public removeSortDescriptor(param0: com.telerik.android.common.Function2): void;
					public addFilterDescriptor(param0: com.telerik.android.common.Function): void;
					public remove(param0: number, param1: boolean): javalangObject;
					public getPosition(param0: number): number;
					public canSelect(param0: number): boolean;
					public getItemCount(): number;
					public onCreateItemViewHolder(param0: androidviewViewGroup, param1: number): com.telerik.widget.list.ListViewHolder;
					public getItemId(param0: number): number;
					public setItems(param0: javautilList<any>): void;
					public canSwipe(param0: number): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ListViewGestureListener {
					public owner: com.telerik.widget.list.RadListView;
					public onTapUp(param0: androidviewMotionEvent): boolean;
					public onActionUpOrCancel(param0: boolean): boolean;
					public onLongPressDragEnded(param0: boolean): boolean;
					public onInterceptTouchEvent(param0: com.telerik.widget.list.RadListView, param1: androidviewMotionEvent): boolean;
					public onLongPress(param0: androidviewMotionEvent): void;
					public onLongPressDrag(param0: number, param1: number, param2: number, param3: number): void;
					public constructor(param0: androidcontentContext);
					public onSingleTapUp(param0: androidviewMotionEvent): boolean;
					public onShortPressDrag(param0: number, param1: number, param2: number, param3: number): boolean;
					public onFling(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
					public onTouchEvent(param0: com.telerik.widget.list.RadListView, param1: androidviewMotionEvent): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ListViewHolder {
					public constructor(param0: androidviewView);
				}
			}
		}
	}
}

import javautilHashSet = java.util.HashSet;
/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.HashSet.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export abstract class ListViewItemAnimator {
					public static ADD: number;
					public static REMOVE: number;
					public owner: com.telerik.widget.list.RadListView;
					public mAddAnimations: javautilArrayList<any>;
					public mRemoveAnimations: javautilArrayList<any>;
					public alreadyAppearedViews: javautilHashSet<any>;
					public getType(): number;
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public animateViewAppearedImpl(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public animateViewAddedImpl(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public animateViewRemovedImpl(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public removeAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): androidsupportv4viewViewPropertyAnimatorCompat;
					public onMeasure(): void;
					public onAnimationRemoveEnded(param0: androidsupportv4viewViewPropertyAnimatorCompat, param1: androidsupportv7widgetRecyclerViewViewHolder): void;
					public onAnimationAddEnded(param0: androidsupportv4viewViewPropertyAnimatorCompat, param1: androidsupportv7widgetRecyclerViewViewHolder): void;
					public animateMove(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: number, param2: number, param3: number, param4: number): boolean;
					public animateViewDisappearedImpl(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public constructor();
					public onAnimationRemoveStarted(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public setType(param0: number): void;
					public animateRemove(param0: androidsupportv7widgetRecyclerViewViewHolder): boolean;
					public animateViewRemoved(param0: androidsupportv7widgetRecyclerViewViewHolder): boolean;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
					public endAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public animateViewAdded(param0: androidsupportv7widgetRecyclerViewViewHolder): boolean;
					public endAnimations(): void;
					public animateViewDisappeared(param0: androidsupportv7widgetRecyclerViewViewHolder): boolean;
					public runPendingAnimations(): void;
					public animateViewAddedPrepare(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public onAnimationAddCancelled(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public dispatchFinishedWhenDone(): void;
					public onAnimationAddStarted(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public animateChange(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: androidsupportv7widgetRecyclerViewViewHolder, param2: number, param3: number, param4: number, param5: number): boolean;
					public onEndAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public animateViewAppeared(param0: androidsupportv7widgetRecyclerViewViewHolder): boolean;
					public addAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): androidsupportv4viewViewPropertyAnimatorCompat;
					public animateChangeImpl(param0: com.telerik.widget.list.ListViewItemAnimator.ChangeInfo): void;
					public isRunning(): boolean;
					public animateAdd(param0: androidsupportv7widgetRecyclerViewViewHolder): boolean;
					public animateMoveImpl(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: number, param2: number, param3: number, param4: number): void;
					public onAnimationRemoveCancelled(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
				}
				export module ListViewItemAnimator {
					export class ChangeInfo {
						public oldHolder: androidsupportv7widgetRecyclerViewViewHolder;
						public newHolder: androidsupportv7widgetRecyclerViewViewHolder;
						public fromX: number;
						public fromY: number;
						public toX: number;
						public toY: number;
						public toString(): string;
					}
					export class MoveInfo {
						public holder: androidsupportv7widgetRecyclerViewViewHolder;
						public fromX: number;
						public fromY: number;
						public toX: number;
						public toY: number;
						public constructor(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: number, param2: number, param3: number, param4: number);
					}
					export class VpaListenerAdapter {
						public onAnimationCancel(param0: androidviewView): void;
						public constructor();
						public onAnimationEnd(param0: androidviewView): void;
						public onAnimationStart(param0: androidviewView): void;
					}
				}
			}
		}
	}
}

import androidwidgetTextView = android.widget.TextView;
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ListViewTextHolder extends com.telerik.widget.list.ListViewHolder {
					public textView: androidwidgetTextView;
					public constructor(param0: androidviewView);
					public constructor(param0: androidviewView, param1: number);
				}
			}
		}
	}
}

import androidsupportv7widgetRecyclerViewAdapterDataObserver = android.support.v7.widget.RecyclerView.AdapterDataObserver;
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.android.data.SelectionService.d.ts" />
/// <reference path="./com.telerik.widget.list.ListViewHolder.d.ts" />
/// <reference path="./com.telerik.widget.list.ListViewWrapperAdapter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ListViewWrapperAdapter extends com.telerik.widget.list.ListViewAdapter {
					public getItemId(param0: javalangObject): number;
					public addRefreshListener(param0: com.telerik.widget.list.SwipeRefreshBehavior.RefreshListener): void;
					public unregisterAdapterDataObserver(param0: androidsupportv7widgetRecyclerViewAdapterDataObserver): void;
					public handleSwipeStart(param0: number, param1: number, param2: number): void;
					public onCreateViewHolder(param0: androidviewViewGroup, param1: number): com.telerik.widget.list.ListViewHolder;
					public removeRefreshListener(param0: com.telerik.widget.list.SwipeRefreshBehavior.RefreshListener): void;
					public getItems(): javautilList<any>;
					public getPosition(param0: javalangObject): number;
					public reorderItem(param0: number, param1: number): boolean;
					public onBindViewHolder(param0: com.telerik.widget.list.ListViewHolder, param1: number): void;
					public removeLoadingListener(param0: com.telerik.widget.list.LoadOnDemandBehavior.LoadingListener): void;
					public selectionService(): com.telerik.android.data.SelectionService;
					public removeSwipeExecuteDismissedListener(param0: com.telerik.widget.list.SwipeExecuteBehavior.SwipeExecuteDismissedListener): void;
					public getPosition(param0: number): number;
					public getPositionInWrapperAdapter(param0: number): number;
					public addLoadingListener(param0: com.telerik.widget.list.LoadOnDemandBehavior.LoadingListener): void;
					public getItemCount(): number;
					public addSwipeExecuteDismissedListener(param0: com.telerik.widget.list.SwipeExecuteBehavior.SwipeExecuteDismissedListener): void;
					public getPositionInOriginalAdapter(param0: number): number;
					public getItemViewType(param0: number): number;
					public getItemId(param0: number): number;
					public registerAdapterDataObserver(param0: androidsupportv7widgetRecyclerViewAdapterDataObserver): void;
				}
				export module ListViewWrapperAdapter {
					export class WrappedDataObserver {
						public onItemRangeChanged(param0: number, param1: number, param2: javalangObject): void;
						public onChanged(): void;
						public onItemRangeMoved(param0: number, param1: number, param2: number): void;
						public constructor(param0: com.telerik.widget.list.ListViewWrapperAdapter, param1: androidsupportv7widgetRecyclerViewAdapterDataObserver);
						public onItemRangeChanged(param0: number, param1: number): void;
						public onItemRangeInserted(param0: number, param1: number): void;
						public onItemRangeRemoved(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class LoadOnDemandBehavior extends com.telerik.widget.list.ListViewBehavior {
					public setEnabled(param0: boolean): void;
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public removeListener(param0: com.telerik.widget.list.LoadOnDemandBehavior.LoadOnDemandListener): void;
					public setMaxRemainingItems(param0: number): void;
					public getMode(): com.telerik.widget.list.LoadOnDemandBehavior.LoadOnDemandMode;
					public setMode(param0: com.telerik.widget.list.LoadOnDemandBehavior.LoadOnDemandMode): void;
					public startLoad(): void;
					public addListener(param0: com.telerik.widget.list.LoadOnDemandBehavior.LoadOnDemandListener): void;
					public isInProgress(): boolean;
					public endLoad(): void;
					public constructor();
					public getMaxRemainingItems(): number;
					public constructor(param0: androidviewView, param1: androidviewView);
					public isEnabled(): boolean;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
				}
				export module LoadOnDemandBehavior {
					export class LoadOnDemandListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.LoadOnDemandBehavior$LoadOnDemandListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onLoadStarted(): void;
							onLoadFinished(): void;
						});
						public onLoadFinished(): void;
						public onLoadStarted(): void;
					}
					export class LoadOnDemandMode {
						public static MANUAL: com.telerik.widget.list.LoadOnDemandBehavior.LoadOnDemandMode;
						public static AUTOMATIC: com.telerik.widget.list.LoadOnDemandBehavior.LoadOnDemandMode;
						public static valueOf(param0: string): com.telerik.widget.list.LoadOnDemandBehavior.LoadOnDemandMode;
						public static values(): native.Array<com.telerik.widget.list.LoadOnDemandBehavior.LoadOnDemandMode>;
					}
					export class LoadingListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.LoadOnDemandBehavior$LoadingListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onLoadingRequested(): void;
							onLoadingFinished(): void;
						});
						public onLoadingRequested(): void;
						public onLoadingFinished(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.telerik.widget.list.DeckOfCardsLayoutManager.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class PerspectiveChangeInfo {
					public static DEFAULT_DURATION: number;
					public static DEFAULT_ALPHA: number;
					public static DEFAULT_TRANSLATION: number;
					public static DEFAULT_ELEVATION: number;
					public getAlpha(): number;
					public getTranslateTop(): number;
					public getTranslateStart(): number;
					public getElevation(): number;
					public setElevation(param0: number): void;
					public setTranslateEnd(param0: number): void;
					public constructor(param0: com.telerik.widget.list.DeckOfCardsLayoutManager);
					public setAlpha(param0: number): void;
					public setTranslateTop(param0: number): void;
					public getAnimationDuration(): number;
					public getTranslateEnd(): number;
					public setTranslateStart(param0: number): void;
					public setTranslateBottom(param0: number): void;
					public setAnimationDuration(param0: number): void;
					public getTranslateBottom(): number;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module android {
	export module support {
		export module v7 {
			export module widget {
				export class LinearLayoutManager extends android.support.v7.widget.RecyclerView.LayoutManager implements android.support.v7.widget.helper.ItemTouchHelper.ViewDropHandler {
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public static INVALID_OFFSET: number;
					public onInitializeAccessibilityEvent(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State, param2: android.view.accessibility.AccessibilityEvent): void;
					public computeVerticalScrollOffset(param0: android.support.v7.widget.RecyclerView.State): number;
					public computeHorizontalScrollExtent(param0: android.support.v7.widget.RecyclerView.State): number;
					public computeScrollVectorForPosition(param0: number): android.graphics.PointF;
					public findLastCompletelyVisibleItemPosition(): number;
					public onInitializeAccessibilityEvent(param0: android.view.accessibility.AccessibilityEvent): void;
					public computeHorizontalScrollRange(param0: android.support.v7.widget.RecyclerView.State): number;
					public assertNotInLayoutOrScroll(param0: string): void;
					public getReverseLayout(): boolean;
					public supportsPredictiveItemAnimations(): boolean;
					public setReverseLayout(param0: boolean): void;
					public scrollToPositionWithOffset(param0: number, param1: number): void;
					public setRecycleChildrenOnDetach(param0: boolean): void;
					public scrollToPosition(param0: number): void;
					public setSmoothScrollbarEnabled(param0: boolean): void;
					public scrollVerticallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
					public scrollHorizontallyBy(param0: number, param1: android.support.v7.widget.RecyclerView.Recycler, param2: android.support.v7.widget.RecyclerView.State): number;
					public findLastVisibleItemPosition(): number;
					public getStackFromEnd(): boolean;
					public computeVerticalScrollRange(param0: android.support.v7.widget.RecyclerView.State): number;
					public constructor();
					public findFirstCompletelyVisibleItemPosition(): number;
					public prepareForDrop(param0: android.view.View, param1: android.view.View, param2: number, param3: number): void;
					public getRecycleChildrenOnDetach(): boolean;
					public findViewByPosition(param0: number): android.view.View;
					public computeHorizontalScrollOffset(param0: android.support.v7.widget.RecyclerView.State): number;
					public setStackFromEnd(param0: boolean): void;
					public smoothScrollToPosition(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.State, param2: number): void;
					public getOrientation(): number;
					public onDetachedFromWindow(param0: android.support.v7.widget.RecyclerView): void;
					public canScrollVertically(): boolean;
					public isLayoutRTL(): boolean;
					public getExtraLayoutSpace(param0: android.support.v7.widget.RecyclerView.State): number;
					public onFocusSearchFailed(param0: android.view.View, param1: number, param2: android.support.v7.widget.RecyclerView.Recycler, param3: android.support.v7.widget.RecyclerView.State): android.view.View;
					public constructor(param0: android.content.Context, param1: number, param2: boolean);
					public generateDefaultLayoutParams(): android.support.v7.widget.RecyclerView.LayoutParams;
					public onRestoreInstanceState(param0: android.os.Parcelable): void;
					public setOrientation(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public isSmoothScrollbarEnabled(): boolean;
					public findFirstVisibleItemPosition(): number;
					public canScrollHorizontally(): boolean;
					public constructor(param0: android.content.Context);
					public computeVerticalScrollExtent(param0: android.support.v7.widget.RecyclerView.State): number;
					public onDetachedFromWindow(param0: android.support.v7.widget.RecyclerView, param1: android.support.v7.widget.RecyclerView.Recycler): void;
					public onLayoutChildren(param0: android.support.v7.widget.RecyclerView.Recycler, param1: android.support.v7.widget.RecyclerView.State): void;
					public onSaveInstanceState(): android.os.Parcelable;
				}
				export module LinearLayoutManager {
					export class AnchorInfo extends javalangObject {
						public assignFromViewAndKeepVisibleRect(param0: android.view.View): void;
						public assignFromView(param0: android.view.View): void;
						public toString(): string;
					}
					export class LayoutChunkResult extends javalangObject {
						public mConsumed: number;
						public mFinished: boolean;
						public mIgnoreConsumed: boolean;
						public mFocusable: boolean;
						public constructor();
					}
					export class LayoutState extends javalangObject {
						public nextViewInLimitedList(param0: android.view.View): android.view.View;
						public assignPositionFromScrapList(): void;
						public assignPositionFromScrapList(param0: android.view.View): void;
					}
					export class SavedState extends javalangObject implements android.os.Parcelable {
						public static CREATOR: android.os.Parcelable.Creator<any>;
						public constructor();
						public describeContents(): number;
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public constructor(param0: android.support.v7.widget.LinearLayoutManager.SavedState);
					}
				}
			}
		}
	}
}

import androidutilAttributeSet = android.util.AttributeSet;
import androidsupportv7widgetRecyclerViewLayoutManager = android.support.v7.widget.RecyclerView.LayoutManager;
import androidsupportv7widgetRecyclerViewAdapter = android.support.v7.widget.RecyclerView.Adapter;
import androidsupportv7widgetRecyclerViewItemAnimator = android.support.v7.widget.RecyclerView.ItemAnimator;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.list.ListViewBehavior.d.ts" />
/// <reference path="./com.telerik.widget.list.ListViewGestureListener.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class RadListView extends androidsupportv7widgetRecyclerView {
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
					public onTouchEvent(param0: androidviewMotionEvent): boolean;
					public setAdapter(param0: androidsupportv7widgetRecyclerViewAdapter): void;
					public getHeaderView(): androidviewView;
					public dispatchDraw(param0: androidgraphicsCanvas): void;
					public swapAdapter(param0: androidsupportv7widgetRecyclerViewAdapter, param1: boolean): void;
					public addIsEmptyChangedListener(param0: com.telerik.widget.list.RadListView.IsEmptyChangedListener): void;
					public getEmptyContent(): androidviewView;
					public setEmptyContent(param0: androidviewView): void;
					public removeIsEmptyChangedListener(param0: com.telerik.widget.list.RadListView.IsEmptyChangedListener): void;
					public scrollToPosition(param0: number): void;
					public setEmptyContentEnabled(param0: boolean): void;
					public onRestoreInstanceState(param0: androidosParcelable): void;
					public onSaveInstanceState(): androidosParcelable;
					public setFooterView(param0: androidviewView): void;
					public getFooterView(): androidviewView;
					public setHeaderView(param0: androidviewView): void;
					public setGestureListener(param0: com.telerik.widget.list.ListViewGestureListener): void;
					public onMeasure(param0: number, param1: number): void;
					public addItemClickListener(param0: com.telerik.widget.list.RadListView.ItemClickListener): void;
					public onScrolled(param0: number, param1: number): void;
					public clearBehaviors(): void;
					public addBehavior(param0: com.telerik.widget.list.ListViewBehavior): void;
					public scrollToPosition(param0: number, param1: number): void;
					public removeItemClickListener(param0: com.telerik.widget.list.RadListView.ItemClickListener): void;
					public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
					public scrollToStart(): void;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
					public scrollToEnd(): void;
					public removeBehavior(param0: com.telerik.widget.list.ListViewBehavior): void;
					public setLayoutManager(param0: androidsupportv7widgetRecyclerViewLayoutManager): void;
					public getChildAdapterPosition(param0: androidviewView): number;
					public getAdapter(): android.support.v7.widget.RecyclerView.Adapter;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public constructor(param0: androidcontentContext);
					public setItemAnimator(param0: android.support.v7.widget.RecyclerView.ItemAnimator): void;
					public isEmptyContentEnabled(): boolean;
					public smoothScrollToPosition(param0: number, param1: number): void;
					public getGestureListener(): com.telerik.widget.list.ListViewGestureListener;
				}
				export module RadListView {
					export class IsEmptyChangedListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.RadListView$IsEmptyChangedListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onChanged(param0: boolean): void;
						});
						public onChanged(param0: boolean): void;
					}
					export class ItemClickListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.RadListView$ItemClickListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onItemClick(param0: number, param1: androidviewMotionEvent): void;
							onItemLongClick(param0: number, param1: androidviewMotionEvent): void;
						});
						public onItemClick(param0: number, param1: androidviewMotionEvent): void;
						public onItemLongClick(param0: number, param1: androidviewMotionEvent): void;
					}
					export class ScrollToIndexLayoutListener {
						public onLayoutChange(param0: androidviewView, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
						public constructor(param0: com.telerik.widget.list.RadListView, param1: number, param2: number);
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ReorderWithHandlesBehavior extends com.telerik.widget.list.ItemReorderBehavior {
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public endReorder(param0: boolean): void;
					public onLongPress(param0: androidviewMotionEvent): void;
					public onFling(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
					public isInProgress(): boolean;
					public onActionUpOrCancel(param0: boolean): boolean;
					public constructor();
					public resolveHandleViewForCoordinates(param0: number, param1: number): androidviewView;
					public onLongPressDragEnded(param0: boolean): boolean;
					public onLongPressDrag(param0: number, param1: number, param2: number, param3: number): void;
					public getReorderHandleOverride(param0: androidviewViewGroup): androidviewView;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
					public onShortPressDrag(param0: number, param1: number, param2: number, param3: number): boolean;
					public constructor(param0: number);
				}
			}
		}
	}
}

/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class ScaleItemAnimator extends com.telerik.widget.list.ListViewItemAnimator {
					public getScaleY(): number;
					public setScaleX(param0: number): void;
					public animateViewAddedPrepare(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public onAnimationAddCancelled(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public removeAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): androidsupportv4viewViewPropertyAnimatorCompat;
					public onAnimationAddEnded(param0: androidsupportv4viewViewPropertyAnimatorCompat, param1: androidsupportv7widgetRecyclerViewViewHolder): void;
					public onAnimationRemoveEnded(param0: androidsupportv4viewViewPropertyAnimatorCompat, param1: androidsupportv7widgetRecyclerViewViewHolder): void;
					public getScaleX(): number;
					public constructor();
					public onEndAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public setScaleY(param0: number): void;
					public addAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): androidsupportv4viewViewPropertyAnimatorCompat;
					public endAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class SelectionBehavior extends com.telerik.widget.list.ListViewBehavior implements com.telerik.widget.list.ItemReorderBehavior.ItemReorderListener, com.telerik.widget.list.SwipeExecuteBehavior.SwipeExecuteListener, com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsListener {
					public onTapUp(param0: androidviewMotionEvent): boolean;
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public onReorderFinished(): void;
					public onSwipeProgressChanged(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
					public onLongPress(param0: androidviewMotionEvent): void;
					public getIsSelected(param0: number): boolean;
					public selectedItems(): javautilList<any>;
					public setSelectionOnLongPress(param0: com.telerik.widget.list.SelectionBehavior.SelectionOnTouch): void;
					public onSwipeStarted(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
					public changeIsSelected(param0: number, param1: boolean): void;
					public addListener(param0: com.telerik.widget.list.SelectionBehavior.SelectionChangedListener): void;
					public onSwipeEnded(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
					public onRestoreInstanceState(param0: androidosParcelable): void;
					public constructor();
					public getSelectionOnLongPress(): com.telerik.widget.list.SelectionBehavior.SelectionOnTouch;
					public onSwipeStateChanged(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState, param1: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState): void;
					public onSwipeStarted(param0: number): void;
					public onReorderStarted(param0: number): void;
					public onSwipeProgressChanged(param0: number, param1: number, param2: androidviewView): void;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
					public startSelection(): void;
					public getSelectionMode(): com.telerik.widget.list.SelectionBehavior.SelectionMode;
					public endSelection(): void;
					public setSelectionMode(param0: com.telerik.widget.list.SelectionBehavior.SelectionMode): void;
					public onExecuteFinished(param0: number): void;
					public removeListener(param0: com.telerik.widget.list.SelectionBehavior.SelectionChangedListener): void;
					public getSelectionOnTouch(): com.telerik.widget.list.SelectionBehavior.SelectionOnTouch;
					public onReorderItem(param0: number, param1: number): void;
					public onSwipeEnded(param0: number, param1: number): void;
					public isInProgress(): boolean;
					public onSaveInstanceState(param0: androidosParcelable): void;
					public onExecuteFinished(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
					public setSelectionOnTouch(param0: com.telerik.widget.list.SelectionBehavior.SelectionOnTouch): void;
					public changeIsSelected(param0: number): void;
				}
				export module SelectionBehavior {
					export class SelectionChangedListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.SelectionBehavior$SelectionChangedListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSelectionStarted(): void;
							onItemIsSelectedChanged(param0: number, param1: boolean): void;
							onSelectionEnded(): void;
						});
						public onSelectionStarted(): void;
						public onSelectionEnded(): void;
						public onItemIsSelectedChanged(param0: number, param1: boolean): void;
					}
					export class SelectionMode {
						public static MULTIPLE: com.telerik.widget.list.SelectionBehavior.SelectionMode;
						public static SINGLE: com.telerik.widget.list.SelectionBehavior.SelectionMode;
						public static valueOf(param0: string): com.telerik.widget.list.SelectionBehavior.SelectionMode;
						public static values(): native.Array<com.telerik.widget.list.SelectionBehavior.SelectionMode>;
					}
					export class SelectionOnTouch {
						public static NEVER: com.telerik.widget.list.SelectionBehavior.SelectionOnTouch;
						public static ALWAYS: com.telerik.widget.list.SelectionBehavior.SelectionOnTouch;
						public static AFTER_START: com.telerik.widget.list.SelectionBehavior.SelectionOnTouch;
						public static values(): native.Array<com.telerik.widget.list.SelectionBehavior.SelectionOnTouch>;
						public static valueOf(param0: string): com.telerik.widget.list.SelectionBehavior.SelectionOnTouch;
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v4.view.ViewPropertyAnimatorCompat.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class SlideItemAnimator extends com.telerik.widget.list.ListViewItemAnimator {
					public static DIRECTION_LEFT: number;
					public static DIRECTION_TOP: number;
					public static DIRECTION_RIGHT: number;
					public static DIRECTION_BOTTOM: number;
					public setAnimateInDirection(param0: number): void;
					public getAnimateInDirection(): number;
					public setAnimateOutDirection(param0: number): void;
					public constructor();
					public addAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): androidsupportv4viewViewPropertyAnimatorCompat;
					public getAnimateOutDirection(): number;
					public animateViewAddedPrepare(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public onAnimationAddCancelled(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
					public removeAnimation(param0: androidsupportv7widgetRecyclerViewViewHolder): androidsupportv4viewViewPropertyAnimatorCompat;
					public onAnimationAddEnded(param0: androidsupportv4viewViewPropertyAnimatorCompat, param1: androidsupportv7widgetRecyclerViewViewHolder): void;
					public onAnimationRemoveEnded(param0: androidsupportv4viewViewPropertyAnimatorCompat, param1: androidsupportv7widgetRecyclerViewViewHolder): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class SlideLayoutManager extends com.telerik.widget.list.SlideLayoutManagerBase {
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public scrollViews(param0: number, param1: number): void;
					public scaleXForIndex(param0: number): number;
					public previousItemsCount(): number;
					public isScrollOnTap(): boolean;
					public alphaForIndex(param0: number): number;
					public setPreviousItemPreview(param0: number): void;
					public constructor(param0: androidcontentContext, param1: number);
					public scaleYForIndex(param0: number): number;
					public setNextItemPreview(param0: number): void;
					public layoutView(param0: androidviewView): void;
					public setScrollOnTap(param0: boolean): void;
					public calculateFrontViewSize(): void;
					public setItemSpacing(param0: number): void;
					public nextItemsCount(): number;
					public translationZForIndex(param0: number): number;
					public constructor();
					public getTransitionMode(): com.telerik.widget.list.SlideLayoutManager.Transition;
					public translationXForIndex(param0: number): number;
					public translationYForIndex(param0: number): number;
					public getNextItemPreview(): number;
					public getPreviousItemPreview(): number;
					public setTransitionMode(param0: com.telerik.widget.list.SlideLayoutManager.Transition): void;
					public constructor(param0: androidcontentContext);
					public getItemSpacing(): number;
				}
				export module SlideLayoutManager {
					export class Transition {
						public static SLIDE_AWAY: com.telerik.widget.list.SlideLayoutManager.Transition;
						public static SLIDE_OVER: com.telerik.widget.list.SlideLayoutManager.Transition;
						public static valueOf(param0: string): com.telerik.widget.list.SlideLayoutManager.Transition;
						public static values(): native.Array<com.telerik.widget.list.SlideLayoutManager.Transition>;
					}
				}
			}
		}
	}
}

import androidviewanimationInterpolator = android.view.animation.Interpolator;
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.animation.Interpolator.d.ts" />
/// <reference path="./com.telerik.widget.list.CurrentPositionChangeListener.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export abstract class SlideLayoutManagerBase {
					public frontViewWidth: number;
					public frontViewHeight: number;
					public frontViewPosition: number;
					public scaleXForIndex(param0: number): number;
					public alphaForIndex(param0: number): number;
					public elevationForIndex(param0: number): number;
					public onItemsAdded(param0: androidsupportv7widgetRecyclerView, param1: number, param2: number): void;
					public supportsPredictiveItemAnimations(): boolean;
					public fillAtEnd(param0: androidsupportv7widgetRecyclerViewRecycler, param1: androidsupportv7widgetRecyclerViewState, param2: number): void;
					public canScroll(param0: number): boolean;
					public nextIndex(param0: number): number;
					public scaleYForIndex(param0: number): number;
					public scrollToPosition(param0: number): void;
					public getStateItemCount(): number;
					public animationInterpolator(): androidviewanimationInterpolator;
					public translationZForIndex(param0: number): number;
					public constructor();
					public calculateScrollProgress(): number;
					public translationXForIndex(param0: number): number;
					public translationYForIndex(param0: number): number;
					public isScrollEnabled(): boolean;
					public onAdapterChanged(param0: androidsupportv7widgetRecyclerViewAdapter, param1: androidsupportv7widgetRecyclerViewAdapter): void;
					public scrollHorizontallyBy(param0: number, param1: androidsupportv7widgetRecyclerViewRecycler, param2: androidsupportv7widgetRecyclerViewState): number;
					public getOrientation(): number;
					public getDirection(param0: number): number;
					public setScrollEnabled(param0: boolean): void;
					public canScrollVertically(): boolean;
					public scrollViews(param0: number, param1: number): void;
					public onScrollStateChanged(param0: number): void;
					public onItemsChanged(param0: androidsupportv7widgetRecyclerView): void;
					public setOrientation(param0: number): void;
					public fillAtStart(param0: androidsupportv7widgetRecyclerViewRecycler, param1: androidsupportv7widgetRecyclerViewState, param2: number): void;
					public canScrollHorizontally(): boolean;
					public generateDefaultLayoutParams(): androidsupportv7widgetRecyclerViewLayoutParams;
					public onLayoutChildren(param0: androidsupportv7widgetRecyclerViewRecycler, param1: androidsupportv7widgetRecyclerViewState): void;
					public layoutIndexForAdapterPosition(param0: number): number;
					public applyLayoutTransformations(param0: androidviewView, param1: number, param2: boolean): void;
					public scrollVerticallyBy(param0: number, param1: androidsupportv7widgetRecyclerViewRecycler, param2: androidsupportv7widgetRecyclerViewState): number;
					public rotationXForIndex(param0: number): number;
					public addListener(param0: com.telerik.widget.list.CurrentPositionChangeListener): void;
					public scrollToPrevious(): void;
					public findEndOffset(): number;
					public onItemsMoved(param0: androidsupportv7widgetRecyclerView, param1: number, param2: number, param3: number): void;
					public fillAtEnd(param0: androidsupportv7widgetRecyclerViewRecycler, param1: androidsupportv7widgetRecyclerViewState): void;
					public fill(param0: number, param1: androidsupportv7widgetRecyclerViewRecycler, param2: androidsupportv7widgetRecyclerViewState): void;
					public calculateFrontViewSize(): void;
					public onItemsUpdated(param0: androidsupportv7widgetRecyclerView, param1: number, param2: number): void;
					public fillAll(param0: androidsupportv7widgetRecyclerViewRecycler, param1: androidsupportv7widgetRecyclerViewState): void;
					public removeListener(param0: com.telerik.widget.list.CurrentPositionChangeListener): void;
					public fillAtStart(param0: androidsupportv7widgetRecyclerViewRecycler, param1: androidsupportv7widgetRecyclerViewState): void;
					public getCurrentPosition(): number;
					public setCurrentPosition(param0: number): void;
					public previousItemsCount(): number;
					public findStartOffset(): number;
					public scrollToNext(): void;
					public updateViewLayoutParams(param0: androidviewView, param1: number, param2: number): void;
					public onItemsRemoved(param0: androidsupportv7widgetRecyclerView, param1: number, param2: number): void;
					public handleItemRemoved(param0: number, param1: androidsupportv7widgetRecyclerViewRecycler, param2: androidsupportv7widgetRecyclerViewState): void;
					public layoutView(param0: androidviewView): void;
					public previousIndex(param0: number): number;
					public animationDuration(): number;
					public rotationForIndex(param0: number): number;
					public nextItemsCount(): number;
					public rotationYForIndex(param0: number): number;
					public notifyListeners(param0: number, param1: number): void;
					public adapterPositionForLayoutIndex(param0: number): number;
				}
			}
		}
	}
}

/// <reference path="./android.graphics.PointF.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class SnappingSmoothScroller {
					public static SNAP_NONE: number;
					public static SNAP_CENTER: number;
					public static SNAP_TOP: number;
					public static SNAP_BOTTOM: number;
					public getSnapMode(): number;
					public computeScrollVectorForPosition(param0: number): androidgraphicsPointF;
					public setSnapMode(param0: number): void;
					public calculateDtToFit(param0: number, param1: number, param2: number, param3: number, param4: number): number;
				}
			}
		}
	}
}

import androidgraphicsdrawableDrawable = android.graphics.drawable.Drawable;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class StickyHeaderBehavior extends com.telerik.widget.list.ListViewBehavior {
					public stickyHeaderImage: androidgraphicsdrawableDrawable;
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public getStickyImageForPosition(param0: number): androidgraphicsdrawableDrawable;
					public getViewForPosition(param0: number): androidviewView;
					public constructor();
					public onDispatchDraw(param0: androidgraphicsCanvas): void;
					public onScrolled(param0: number, param1: number): void;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
					public createImageFromView(param0: androidviewView): androidgraphicsdrawableDrawable;
					public getItemHeaderPosition(param0: number): number;
					public invalidate(): void;
				}
			}
		}
	}
}

/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.telerik.widget.list.ListViewHolder.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class SwipeActionsBehavior extends com.telerik.widget.list.ListViewBehavior {
					public static DEFAULT_SWIPE_OFFSET: number;
					public static DEFAULT_SWIPE_LIMIT: number;
					public bindViewHolder(param0: com.telerik.widget.list.ListViewHolder, param1: number): void;
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public onTapUp(param0: androidviewMotionEvent): boolean;
					public addListener(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsListener): void;
					public onLongPress(param0: androidviewMotionEvent): void;
					public setSwipeLimitStart(param0: number): void;
					public createViewHolder(param0: androidviewViewGroup, param1: number): com.telerik.widget.list.ListViewHolder;
					public endExecute(): void;
					public endExecute(param0: boolean): void;
					public getSwipeState(): com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState;
					public constructor();
					public getDockMode(): com.telerik.widget.list.SwipeActionsBehavior.SwipeDockMode;
					public setSwipeThresholdStart(param0: number): void;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
					public setSwipeLimitEnd(param0: number): void;
					public managesViewHolders(): boolean;
					public onShortPressDrag(param0: number, param1: number, param2: number, param3: number): boolean;
					public getSwipeLimitEnd(): number;
					public onFling(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
					public setSwipeThresholdEnd(param0: number): void;
					public isInProgress(): boolean;
					public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
					public onActionUpOrCancel(param0: boolean): boolean;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public removeListener(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsListener): void;
					public getSwipeLimitStart(): number;
					public setDockMode(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeDockMode): void;
				}
				export module SwipeActionsBehavior {
					export class DockContext {
					}
					export class SwipeActionEvent {
						public swipedItemPosition(): number;
						public mainView(): androidviewView;
						public swipePositionWhenReleased(): number;
						public isThresholdPassed(): boolean;
						public swipeView(): androidviewView;
						public currentOffset(): number;
					}
					export class SwipeActionsListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.SwipeActionsBehavior$SwipeActionsListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSwipeStarted(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
							onSwipeProgressChanged(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
							onSwipeEnded(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
							onExecuteFinished(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
							onSwipeStateChanged(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState, param1: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState): void;
						});
						public onSwipeStarted(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
						public onSwipeEnded(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
						public onSwipeStateChanged(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState, param1: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState): void;
						public onSwipeProgressChanged(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
						public onExecuteFinished(param0: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionEvent): void;
					}
					export class SwipeActionsState {
						public static IDLE: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState;
						public static SWIPING: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState;
						public static RESETTING: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState;
						public static ACTIVE: com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState;
						public static values(): native.Array<com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState>;
						public static valueOf(param0: string): com.telerik.widget.list.SwipeActionsBehavior.SwipeActionsState;
					}
					export class SwipeDockMode {
						public static DockAtLimit: com.telerik.widget.list.SwipeActionsBehavior.SwipeDockMode;
						public static DockAtThreshold: com.telerik.widget.list.SwipeActionsBehavior.SwipeDockMode;
						public static valueOf(param0: string): com.telerik.widget.list.SwipeActionsBehavior.SwipeDockMode;
						public static values(): native.Array<com.telerik.widget.list.SwipeActionsBehavior.SwipeDockMode>;
					}
					export class SwipeExecuteDataObserver {
						public onChanged(): void;
						public onItemRangeRemoved(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class SwipeExecuteBehavior extends com.telerik.widget.list.ListViewBehavior {
					public static DEFAULT_SWIPE_OFFSET: number;
					public static DEFAULT_SWIPE_LIMIT: number;
					public clearSwipeDrawables(): void;
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public onTapUp(param0: androidviewMotionEvent): boolean;
					public onLongPress(param0: androidviewMotionEvent): void;
					public setSwipeLimitStart(param0: number): void;
					public endExecute(): void;
					public constructor();
					public onDispatchDraw(param0: androidgraphicsCanvas): void;
					public startSwipe(param0: number, param1: number): void;
					public ensureWithinSwipeLimits(param0: number): number;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
					public setSwipeLimitEnd(param0: number): void;
					public onShortPressDrag(param0: number, param1: number, param2: number, param3: number): boolean;
					public removeSwipeDrawable(param0: number): boolean;
					public getSwipeOffset(): number;
					public getSwipeLimitEnd(): number;
					public removeListener(param0: com.telerik.widget.list.SwipeExecuteBehavior.SwipeExecuteListener): void;
					public onFling(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
					public moveSwipe(param0: number, param1: number, param2: number, param3: number): void;
					public isInProgress(): boolean;
					public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
					public setAutoDissolve(param0: boolean): void;
					public endSwipe(): void;
					public addListener(param0: com.telerik.widget.list.SwipeExecuteBehavior.SwipeExecuteListener): void;
					public onActionUpOrCancel(param0: boolean): boolean;
					public addSwipeDrawable(param0: number, param1: androidgraphicsdrawableDrawable): void;
					public setSwipeOffset(param0: number): void;
					public createSwipeImage(param0: androidviewView): androidgraphicsdrawableDrawable;
					public isAutoDissolve(): boolean;
					public getSwipeLimitStart(): number;
				}
				export module SwipeExecuteBehavior {
					export class EventInfo {
					}
					export class SwipeExecuteDataObserver {
						public onChanged(): void;
						public onItemRangeRemoved(param0: number, param1: number): void;
					}
					export class SwipeExecuteDismissedListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.SwipeExecuteBehavior$SwipeExecuteDismissedListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSwipeContentDismissed(): void;
						});
						public onSwipeContentDismissed(): void;
					}
					export class SwipeExecuteListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.SwipeExecuteBehavior$SwipeExecuteListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSwipeStarted(param0: number): void;
							onSwipeProgressChanged(param0: number, param1: number, param2: androidviewView): void;
							onSwipeEnded(param0: number, param1: number): void;
							onExecuteFinished(param0: number): void;
						});
						public onSwipeEnded(param0: number, param1: number): void;
						public onSwipeStarted(param0: number): void;
						public onExecuteFinished(param0: number): void;
						public onSwipeProgressChanged(param0: number, param1: number, param2: androidviewView): void;
					}
					export class SwipeState {
						public static IDLE: com.telerik.widget.list.SwipeExecuteBehavior.SwipeState;
						public static STARTED: com.telerik.widget.list.SwipeExecuteBehavior.SwipeState;
						public static ENDED: com.telerik.widget.list.SwipeExecuteBehavior.SwipeState;
						public static valueOf(param0: string): com.telerik.widget.list.SwipeExecuteBehavior.SwipeState;
						public static values(): native.Array<com.telerik.widget.list.SwipeExecuteBehavior.SwipeState>;
					}
				}
			}
		}
	}
}

import androidviewViewGroupLayoutParams = android.view.ViewGroup.LayoutParams;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class SwipeLayout {
					public onMeasure(param0: number, param1: number): void;
					public generateLayoutParams(param0: androidviewViewGroupLayoutParams): androidviewViewGroupLayoutParams;
					public setMainView(param0: androidviewView): void;
					public shouldDelayChildPressedState(): boolean;
					public setSwipeView(param0: androidviewView): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public constructor(param0: androidcontentContext);
					public static layoutChild(param0: androidviewView, param1: number, param2: number, param3: number, param4: number): void;
					public generateLayoutParams(param0: androidutilAttributeSet): androidviewViewGroupLayoutParams;
					public checkLayoutParams(param0: androidviewViewGroupLayoutParams): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
declare module android {
	export module support {
		export module v4 {
			export module view {
				export class NestedScrollingParent extends javalangObject {
					/**
					 * Constructs a new instance of the android.support.v4.view.NestedScrollingParent interface with the provided implementation.
					 */
					public constructor(implementation: {
						onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						onStopNestedScroll(param0: android.view.View): void;
						onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						getNestedScrollAxes(): number;
					});
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public getNestedScrollAxes(): number;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Point.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.ActionMode.d.ts" />
/// <reference path="./android.view.ContextMenu.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewParent.d.ts" />
/// <reference path="./android.view.accessibility.AccessibilityEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module android {
	export module support {
		export module v4 {
			export module widget {
				export class SwipeRefreshLayout extends android.view.ViewGroup implements android.support.v4.view.NestedScrollingParent, android.support.v4.view.NestedScrollingChild {
					public static LARGE: number;
					public static DEFAULT: number;
					public mFrom: number;
					public mOriginalOffsetTop: number;
					public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
					public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
					public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
					public getChildDrawingOrder(param0: number, param1: number): number;
					public dispatchNestedPreScroll(param0: number, param1: number, param2: native.Array<number>, param3: native.Array<number>): boolean;
					public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
					public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
					public isLayoutRequested(): boolean;
					public clearChildFocus(param0: android.view.View): void;
					public isRefreshing(): boolean;
					public isTextDirectionResolved(): boolean;
					public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
					public showContextMenuForChild(param0: android.view.View): boolean;
					public isLayoutDirectionResolved(): boolean;
					public addView(param0: android.view.View, param1: number): void;
					public stopNestedScroll(): void;
					public setOnRefreshListener(param0: android.support.v4.widget.SwipeRefreshLayout.OnRefreshListener): void;
					public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable, param2: number): void;
					public setRefreshing(param0: boolean): void;
					public bringChildToFront(param0: android.view.View): void;
					public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public getLayoutDirection(): number;
					public getParentForAccessibility(): android.view.ViewParent;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public addView(param0: android.view.View, param1: number, param2: number): void;
					public createContextMenu(param0: android.view.ContextMenu): void;
					public setColorSchemeResources(param0: native.Array<number>): void;
					public dispatchNestedScroll(param0: number, param1: number, param2: number, param3: number, param4: native.Array<number>): boolean;
					public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
					public dispatchNestedFling(param0: number, param1: number, param2: boolean): boolean;
					public childDrawableStateChanged(param0: android.view.View): void;
					public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
					public getTextDirection(): number;
					public requestFitSystemWindows(): void;
					public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
					public focusSearch(param0: number): android.view.View;
					public setProgressBackgroundColorSchemeColor(param0: number): void;
					public onInterceptTouchEvent(param0: android.view.MotionEvent): boolean;
					public setProgressViewEndTarget(param0: boolean, param1: number): void;
					public isTextAlignmentResolved(): boolean;
					public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
					public requestTransparentRegion(param0: android.view.View): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public setSize(param0: number): void;
					public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
					public setProgressBackgroundColor(param0: number): void;
					public canResolveTextAlignment(): boolean;
					public setColorScheme(param0: native.Array<number>): void;
					public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
					public canResolveTextDirection(): boolean;
					public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
					public requestDisallowInterceptTouchEvent(param0: boolean): void;
					public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
					public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
					public setProgressBackgroundColorSchemeResource(param0: number): void;
					public getParent(): android.view.ViewParent;
					public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
					public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
					public setColorSchemeColors(param0: native.Array<number>): void;
					public setNestedScrollingEnabled(param0: boolean): void;
					public setDistanceToTriggerSync(param0: number): void;
					public onStopNestedScroll(param0: android.view.View): void;
					public sendAccessibilityEvent(param0: number): void;
					public requestLayout(): void;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public canResolveLayoutDirection(): boolean;
					public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
					public removeView(param0: android.view.View): void;
					public getTextAlignment(): number;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: javalangRunnable): void;
					public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
					public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
					public recomputeViewAttributes(param0: android.view.View): void;
					public canChildScrollUp(): boolean;
					public focusableViewAvailable(param0: android.view.View): void;
					public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
					public constructor(param0: android.content.Context);
					public getNestedScrollAxes(): number;
					public isNestedScrollingEnabled(): boolean;
					public addView(param0: android.view.View): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public focusSearch(param0: android.view.View, param1: number): android.view.View;
					public dispatchNestedPreFling(param0: number, param1: number): boolean;
					public setProgressViewOffset(param0: boolean, param1: number, param2: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
					public startNestedScroll(param0: number): boolean;
					public hasNestedScrollingParent(): boolean;
					public getProgressCircleDiameter(): number;
				}
				export module SwipeRefreshLayout {
					export class OnRefreshListener extends javalangObject {
						/**
						 * Constructs a new instance of the android.support.v4.widget.SwipeRefreshLayout$OnRefreshListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onRefresh(): void;
						});
						public onRefresh(): void;
					}
				}
			}
		}
	}
}

import androidsupportv4widgetSwipeRefreshLayout = android.support.v4.widget.SwipeRefreshLayout;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v4.widget.SwipeRefreshLayout.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.telerik.widget.list.RadListView.d.ts" />
/// <reference path="./com.telerik.widget.list.SwipeRefreshBehavior.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class SwipeRefreshBehavior extends com.telerik.widget.list.ListViewBehavior {
					public endRefresh(param0: boolean): void;
					public removeListener(param0: com.telerik.widget.list.SwipeRefreshBehavior.SwipeRefreshListener): void;
					public onDetached(param0: com.telerik.widget.list.RadListView): void;
					public init(param0: androidcontentContext): void;
					public insertRefreshLayout(param0: com.telerik.widget.list.RadListView, param1: androidsupportv4widgetSwipeRefreshLayout): void;
					public startRefresh(): void;
					public onLongPress(param0: androidviewMotionEvent): void;
					public owner(): com.telerik.widget.list.RadListView;
					public addListener(param0: com.telerik.widget.list.SwipeRefreshBehavior.SwipeRefreshListener): void;
					public isInProgress(): boolean;
					public onActionUpOrCancel(param0: boolean): boolean;
					public constructor();
					public swipeRefresh(): androidsupportv4widgetSwipeRefreshLayout;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onAttached(param0: com.telerik.widget.list.RadListView): void;
				}
				export module SwipeRefreshBehavior {
					export class RefreshListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.SwipeRefreshBehavior$RefreshListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onRefreshFinished(): void;
						});
						public onRefreshFinished(): void;
					}
					export class SwipeRefreshIndicator {
						public onTouchEvent(param0: androidviewMotionEvent): boolean;
						public onInterceptTouchEvent(param0: androidviewMotionEvent): boolean;
						public constructor(param0: com.telerik.widget.list.SwipeRefreshBehavior, param1: androidcontentContext);
						public onMeasure(param0: number, param1: number): void;
					}
					export class SwipeRefreshListener {
						/**
						 * Constructs a new instance of the com.telerik.widget.list.SwipeRefreshBehavior$SwipeRefreshListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onRefreshRequested(): void;
						});
						public onRefreshRequested(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module com {
	export module telerik {
		export module widget {
			export module list {
				export class WrapLayoutManager {
					public static HORIZONTAL: number;
					public static VERTICAL: number;
					public getGravity(): number;
					public computeVerticalScrollOffset(param0: androidsupportv7widgetRecyclerViewState): number;
					public onItemsMoved(param0: androidsupportv7widgetRecyclerView, param1: number, param2: number, param3: number): void;
					public computeHorizontalScrollExtent(param0: androidsupportv7widgetRecyclerViewState): number;
					public onItemsAdded(param0: androidsupportv7widgetRecyclerView, param1: number, param2: number): void;
					public constructor(param0: androidcontentContext, param1: number);
					public scrollToPosition(param0: number): void;
					public computeVerticalScrollRange(param0: androidsupportv7widgetRecyclerViewState): number;
					public scrollHorizontallyBy(param0: number, param1: androidsupportv7widgetRecyclerViewRecycler, param2: androidsupportv7widgetRecyclerViewState): number;
					public onAdapterChanged(param0: androidsupportv7widgetRecyclerViewAdapter, param1: androidsupportv7widgetRecyclerViewAdapter): void;
					public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number, param3: number);
					public getLineSpacing(): number;
					public canScrollVertically(): boolean;
					public setMinimumItemSpacing(param0: number): void;
					public onItemsChanged(param0: androidsupportv7widgetRecyclerView): void;
					public setGravity(param0: number): void;
					public onItemsRemoved(param0: androidsupportv7widgetRecyclerView, param1: number, param2: number): void;
					public computeHorizontalScrollOffset(param0: androidsupportv7widgetRecyclerViewState): number;
					public generateDefaultLayoutParams(): androidsupportv7widgetRecyclerViewLayoutParams;
					public onLayoutChildren(param0: androidsupportv7widgetRecyclerViewRecycler, param1: androidsupportv7widgetRecyclerViewState): void;
					public canScrollHorizontally(): boolean;
					public getMinimumItemSpacing(): number;
					public computeVerticalScrollExtent(param0: androidsupportv7widgetRecyclerViewState): number;
					public scrollVerticallyBy(param0: number, param1: androidsupportv7widgetRecyclerViewRecycler, param2: androidsupportv7widgetRecyclerViewState): number;
					public computeHorizontalScrollRange(param0: androidsupportv7widgetRecyclerViewState): number;
					public constructor(param0: androidcontentContext);
					public setLineSpacing(param0: number): void;
				}
			}
		}
	}
}

