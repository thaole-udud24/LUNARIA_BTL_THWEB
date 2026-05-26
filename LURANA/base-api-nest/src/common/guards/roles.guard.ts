import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) return true;

    const req = context.switchToHttp().getRequest<Request>();
    const user = req.user as { roles?: string[] } | undefined;

    // Ensure roles is an array, then check for matching roles
    if (!user || !Array.isArray(user.roles)) return false;
    const roles = user.roles;
    return requiredRoles.some((role) => roles.includes(role));
  }
}
